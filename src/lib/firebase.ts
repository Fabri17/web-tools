// Firebase configuration and initialization
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics, logEvent as firebaseLogEvent, isSupported } from 'firebase/analytics';
import { getRemoteConfig, type RemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: "AIzaSyDtgfZkU-j7rzThl-yB3fCbaNn48VDSLmg",
  authDomain: "web-tools-9d022.firebaseapp.com",
  projectId: "web-tools-9d022",
  storageBucket: "web-tools-9d022.firebasestorage.app",
  messagingSenderId: "284814500447",
  appId: "1:284814500447:web:c9934e17499f6f0329b1ea",
  measurementId: "G-LZCP3SKJJ8"
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let remoteConfig: RemoteConfig | null = null;

// Initialize Firebase (only in browser)
export const initializeFirebase = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Initialize app
    if (!app) {
      app = initializeApp(firebaseConfig);
    }
    
    // Initialize Analytics (only if supported)
    const analyticsSupported = await isSupported();
    if (analyticsSupported && !analytics) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized');
    }
    
    // Initialize Remote Config
    if (!remoteConfig) {
      remoteConfig = getRemoteConfig(app);
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 3600000, // 1 hour
        fetchTimeoutMillis: 60000, // 1 minute
      };
      
      // Set default values
      remoteConfig.defaultConfig = {
        maintenance_mode: false,
        maintenance_message: 'Estamos realizando mantenimiento. Volveremos pronto.',
      };
      
      // Fetch and activate config
      await fetchAndActivate(remoteConfig);
      console.log('Firebase Remote Config initialized');
    }
    
    return { app, analytics, remoteConfig };
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

// Get Remote Config value
export const getConfigValue = (key: string): any => {
  if (!remoteConfig) {
    console.warn('Remote Config not initialized');
    return null;
  }
  
  try {
    const value = getValue(remoteConfig, key);
    // Try to parse as boolean
    if (value.asString() === 'true') return true;
    if (value.asString() === 'false') return false;
    // Try to parse as JSON
    try {
      return JSON.parse(value.asString());
    } catch {
      return value.asString();
    }
  } catch (error) {
    console.error(`Error getting config value for ${key}:`, error);
    return null;
  }
};

// Check if maintenance mode is enabled
export const isMaintenanceMode = (): boolean => {
  const maintenanceMode = getConfigValue('maintenance_mode');
  return maintenanceMode === true;
};

// Get maintenance message
export const getMaintenanceMessage = (): string => {
  const message = getConfigValue('maintenance_message');
  return message || 'Estamos realizando mantenimiento. Volveremos pronto.';
};

// Log custom events
export const logEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!analytics) {
    console.warn('Analytics not initialized');
    return;
  }
  
  try {
    firebaseLogEvent(analytics, eventName, eventParams);
    console.log(`Event logged: ${eventName}`, eventParams);
  } catch (error) {
    console.error(`Error logging event ${eventName}:`, error);
  }
};

// Predefined event helpers
export const trackPageView = (pageName: string) => {
  logEvent('page_view', { page_name: pageName });
};

export const trackToolUsage = (toolName: string, action: string) => {
  logEvent('tool_usage', { tool_name: toolName, action });
};

export const trackConversion = (conversionType: string) => {
  logEvent('conversion', { conversion_type: conversionType });
};

export const trackError = (errorType: string, errorMessage: string) => {
  logEvent('error', { error_type: errorType, error_message: errorMessage });
};
