/**
 * ================================================
 * WEBTOOLS SUITE - FAVORITES SYSTEM V2
 * ================================================
 * Sistema robusto de favoritos con:
 * - Manejo de errores completo
 * - Prevención de race conditions
 * - Validación de datos
 * - Event listeners con cleanup
 * - 100% Client-side processing
 */

export interface FavoriteTool {
  title: string;
  href: string;
  icon: string;
}

const FAVORITES_KEY = 'webtools_favorites';
const MAX_FAVORITES = 8;

// Control de inicialización para prevenir listeners duplicados
let isInitialized = false;
let eventHandlers: Map<string, EventListener> = new Map();

/**
 * Obtiene favoritos con validación completa de datos
 */
export function getFavorites(): FavoriteTool[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    
    // Validar estructura
    if (!Array.isArray(parsed)) {
      console.warn('Invalid favorites structure, resetting...');
      localStorage.removeItem(FAVORITES_KEY);
      return [];
    }
    
    // Validar cada item
    const validated = parsed.filter((item): item is FavoriteTool => {
      return (
        item !== null &&
        typeof item === 'object' &&
        typeof item.title === 'string' &&
        typeof item.href === 'string' &&
        typeof item.icon === 'string' &&
        item.title.trim() !== '' &&
        item.href.trim() !== ''
      );
    });
    
    // Si se filtraron items, actualizar storage
    if (validated.length !== parsed.length) {
      saveFavorites(validated);
    }
    
    return validated;
  } catch (error) {
    console.error('Error reading favorites:', error);
    // Limpiar datos corruptos
    try {
      localStorage.removeItem(FAVORITES_KEY);
    } catch (e) {
      // Silently fail si no se puede limpiar
    }
    return [];
  }
}

/**
 * Guarda favoritos con manejo de quota exceeded
 */
function saveFavorites(favorites: FavoriteTool[]): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const data = JSON.stringify(favorites);
    localStorage.setItem(FAVORITES_KEY, data);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      showToast('Error: Espacio de almacenamiento lleno', 'error');
      console.error('localStorage quota exceeded');
    } else {
      showToast('Error al guardar favoritos', 'error');
      console.error('Error saving favorites:', error);
    }
    return false;
  }
}

/**
 * Agrega herramienta a favoritos con límite y deduplicación
 */
export function addFavorite(tool: FavoriteTool): boolean {
  const favorites = getFavorites();
  
  // Verificar si ya existe
  if (favorites.some(fav => fav.href === tool.href)) {
    showToast('Esta herramienta ya está en favoritos', 'warning');
    return false;
  }
  
  // Verificar límite
  if (favorites.length >= MAX_FAVORITES) {
    showToast(`Máximo ${MAX_FAVORITES} favoritos permitidos`, 'warning');
    return false;
  }
  
  // Validar tool antes de agregar
  if (!tool.title || !tool.href || !tool.icon) {
    console.error('Invalid tool data:', tool);
    showToast('Error: Datos de herramienta inválidos', 'error');
    return false;
  }
  
  const newFavorites = [...favorites, tool];
  const saved = saveFavorites(newFavorites);
  
  if (saved) {
    dispatchFavoritesChanged();
    showToast(`${tool.title} agregado a favoritos`, 'success');
    return true;
  }
  
  return false;
}

/**
 * Remueve herramienta de favoritos
 */
export function removeFavorite(href: string): boolean {
  const favorites = getFavorites();
  const filtered = favorites.filter(fav => fav.href !== href);
  
  if (filtered.length === favorites.length) {
    // No se encontró el item
    return false;
  }
  
  const saved = saveFavorites(filtered);
  
  if (saved) {
    dispatchFavoritesChanged();
    const removedTool = favorites.find(fav => fav.href === href);
    showToast(`${removedTool?.title || 'Herramienta'} removida de favoritos`, 'success');
    return true;
  }
  
  return false;
}

/**
 * Verifica si una herramienta está en favoritos
 */
export function isFavorite(href: string): boolean {
  const favorites = getFavorites();
  return favorites.some(fav => fav.href === href);
}

/**
 * Toggle favorite status (agregar o remover)
 */
export function toggleFavorite(tool: FavoriteTool): boolean {
  if (isFavorite(tool.href)) {
    return removeFavorite(tool.href);
  } else {
    return addFavorite(tool);
  }
}

/**
 * Dispatch custom event cuando cambian los favoritos
 */
function dispatchFavoritesChanged(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const event = new CustomEvent('favoritesChanged', {
      detail: { favorites: getFavorites() }
    });
    window.dispatchEvent(event);
  } catch (error) {
    console.error('Error dispatching favoritesChanged event:', error);
  }
}

/**
 * Muestra notificación toast
 */
export function showToast(
  message: string,
  type: 'success' | 'warning' | 'error' = 'success'
): void {
  if (typeof window === 'undefined') return;
  
  // Remover toast anterior si existe
  const existingToast = document.querySelector('.favorites-toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Crear toast
  const toast = document.createElement('div');
  toast.className = `favorites-toast favorites-toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  
  // Icon basado en tipo
  const icons = {
    success: '✓',
    warning: '⚠',
    error: '✕'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger reflow para animación
  void toast.offsetHeight;
  
  // Mostrar toast
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Auto-hide después de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Limpia todos los event listeners registrados
 */
export function cleanupFavoritesListeners(): void {
  eventHandlers.forEach((handler, event) => {
    window.removeEventListener(event, handler);
  });
  eventHandlers.clear();
  isInitialized = false;
}

/**
 * Inicializa event listeners globales (solo una vez)
 */
export function initFavoritesListeners(): void {
  if (typeof window === 'undefined') return;
  
  // Prevenir inicialización múltiple
  if (isInitialized) {
    return;
  }
  
  // Handler para clicks en botones de favoritos
  const handleFavoriteClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const button = target.closest('[data-favorite-btn]') as HTMLElement;
    
    if (!button) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const toolData = button.getAttribute('data-tool');
    if (!toolData) return;
    
    try {
      const tool: FavoriteTool = JSON.parse(toolData);
      toggleFavorite(tool);
    } catch (error) {
      console.error('Error parsing tool data:', error);
      showToast('Error al procesar favorito', 'error');
    }
  };
  
  // Handler para remover desde FavoritesBar
  const handleRemoveFavorite = (e: Event) => {
    const target = e.target as HTMLElement;
    const button = target.closest('[data-remove-favorite]') as HTMLElement;
    
    if (!button) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const href = button.getAttribute('data-href');
    if (href) {
      removeFavorite(href);
    }
  };
  
  // Handler para storage event (sync entre tabs)
  const handleStorageChange = (e: Event) => {
    const storageEvent = e as StorageEvent;
    if (storageEvent.key === FAVORITES_KEY) {
      dispatchFavoritesChanged();
    }
  };
  
  // Registrar listeners
  document.addEventListener('click', handleFavoriteClick);
  document.addEventListener('click', handleRemoveFavorite);
  window.addEventListener('storage', handleStorageChange);
  
  // Guardar referencias para cleanup
  eventHandlers.set('click-favorite', handleFavoriteClick);
  eventHandlers.set('click-remove', handleRemoveFavorite);
  eventHandlers.set('storage', handleStorageChange);
  
  isInitialized = true;
}

/**
 * Reset del sistema de favoritos (útil para debugging/testing)
 */
export function resetFavorites(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(FAVORITES_KEY);
    dispatchFavoritesChanged();
    showToast('Favoritos restablecidos', 'success');
  } catch (error) {
    console.error('Error resetting favorites:', error);
    showToast('Error al restablecer favoritos', 'error');
  }
}
