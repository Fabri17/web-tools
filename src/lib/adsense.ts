// AdSense Configuration
export const ADSENSE_CONFIG = {
  publisherId: 'ca-pub-8126867540323247', // Replace with your actual publisher ID
  
  // Ad Slots for different positions and pages
  adSlots: {
    // Landing page slots
    'landing-header': '1111111111',
    'landing-middle': '2222222222', 
    'landing-footer': '3333333333',
    
    // Tool pages slots
    'tool-header': '4444444444',
    'tool-content': '5555555555',
    'tool-footer': '6666666666',
    
    // About/Contact page slots
    'about-content': '7777777777',
    
    // Default fallback
    'default': '8888888888'
  },
  
  // Ad formats configuration
  formats: {
    horizontal: {
      style: 'min-height: 90px;',
      format: 'auto',
      layout: ''
    },
    rectangle: {
      style: 'min-height: 250px;',
      format: 'rectangle',
      layout: ''
    },
    vertical: {
      style: 'min-height: 600px; width: 300px;',
      format: 'auto',
      layout: ''
    },
    auto: {
      style: 'min-height: 100px;',
      format: 'auto',
      layout: ''
    }
  },
  
  // Feature flags
  features: {
    enableAds: true,
    enableSupportBanners: true,
    showAdsOnMobile: true,
    respectDoNotTrack: true
  }
};

// Helper function to get ad slot ID
export function getAdSlot(pageType: string, position: string): string {
  const key = `${pageType}-${position}`;
  const adSlots = ADSENSE_CONFIG.adSlots as Record<string, string>;
  return adSlots[key] || adSlots.default;
}

// Helper function to check if ads should be shown
export function shouldShowAds(): boolean {
  // Respect Do Not Track header
  if (ADSENSE_CONFIG.features.respectDoNotTrack && navigator.doNotTrack === '1') {
    return false;
  }
  
  // Check if ads are enabled globally
  return ADSENSE_CONFIG.features.enableAds;
}

// Helper function to load AdSense script
export function loadAdSenseScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector(`script[src*="googlesyndication"]`)) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`;
    script.crossOrigin = 'anonymous';
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load AdSense script'));
    
    document.head.appendChild(script);
  });
}