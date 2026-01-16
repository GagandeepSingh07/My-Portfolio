/* ============================================
   SHARED UTILITIES - IMPROVED
   ============================================ */

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Safely get element by ID with error handling
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} - Element or null
 */
function safeGetElement(id) {
    try {
        return document.getElementById(id);
    } catch (error) {
        console.error(`Error getting element with ID: ${id}`, error);
        return null;
    }
}

/**
 * Safely query selector with error handling
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Context element (default: document)
 * @returns {HTMLElement|null} - Element or null
 */
function safeQuerySelector(selector, context = document) {
    try {
        return context.querySelector(selector);
    } catch (error) {
        console.error(`Error with selector: ${selector}`, error);
        return null;
    }
}

/**
 * Safely query all with error handling
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Context element (default: document)
 * @returns {NodeList|Array} - NodeList or empty array
 */
function safeQuerySelectorAll(selector, context = document) {
    try {
        return context.querySelectorAll(selector);
    } catch (error) {
        console.error(`Error with selector: ${selector}`, error);
        return [];
    }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset in pixels
 * @returns {boolean} - Whether element is in viewport
 */
function isInViewport(element, offset = 0) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 - offset &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
}

/**
 * Smooth scroll to element with fallback
 * @param {HTMLElement|string} target - Target element or selector
 * @param {Object} options - Scroll options
 */
function smoothScrollTo(target, options = {}) {
    const element = typeof target === 'string' ? safeQuerySelector(target) : target;
    
    if (!element) {
        console.warn('Scroll target not found:', target);
        return;
    }

    const defaultOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    };

    const scrollOptions = { ...defaultOptions, ...options };

    // Check if smooth scroll is supported
    if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView(scrollOptions);
    } else {
        // Fallback for browsers that don't support smooth scroll
        element.scrollIntoView(false);
    }
}

/**
 * Add multiple event listeners at once
 * @param {HTMLElement} element - Target element
 * @param {string} events - Space-separated event names
 * @param {Function} handler - Event handler
 */
function addEventListeners(element, events, handler) {
    if (!element) return;
    
    events.split(' ').forEach(event => {
        element.addEventListener(event.trim(), handler);
    });
}

/**
 * Remove multiple event listeners at once
 * @param {HTMLElement} element - Target element
 * @param {string} events - Space-separated event names
 * @param {Function} handler - Event handler
 */
function removeEventListeners(element, events, handler) {
    if (!element) return;
    
    events.split(' ').forEach(event => {
        element.removeEventListener(event.trim(), handler);
    });
}

/**
 * Lazy load images with intersection observer
 * @param {string} selector - Image selector (default: 'img[loading="lazy"]')
 */
function initLazyLoading(selector = 'img[loading="lazy"]') {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported, images will load immediately');
        return;
    }

    const images = document.querySelectorAll(selector);
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                // Remove lazy class
                img.classList.remove('lazy');
                img.classList.add('loaded');
                
                // Stop observing
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before image enters viewport
        threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Detect if user prefers reduced motion
 * @returns {boolean} - Whether user prefers reduced motion
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get browser name and version
 * @returns {Object} - Browser info
 */
function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName = 'Unknown';
    let browserVersion = 'Unknown';

    if (ua.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
        browserVersion = ua.match(/Firefox\/([0-9.]+)/)?.[1];
    } else if (ua.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
        browserVersion = ua.match(/Chrome\/([0-9.]+)/)?.[1];
    } else if (ua.indexOf('Safari') > -1) {
        browserName = 'Safari';
        browserVersion = ua.match(/Version\/([0-9.]+)/)?.[1];
    } else if (ua.indexOf('Edge') > -1 || ua.indexOf('Edg') > -1) {
        browserName = 'Edge';
        browserVersion = ua.match(/(?:Edge|Edg)\/([0-9.]+)/)?.[1];
    }

    return { name: browserName, version: browserVersion };
}

/**
 * Check if browser supports a feature
 * @param {string} feature - Feature to check
 * @returns {boolean} - Whether feature is supported
 */
function supportsFeature(feature) {
    const features = {
        'webp': () => {
            const canvas = document.createElement('canvas');
            if (canvas.getContext && canvas.getContext('2d')) {
                return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            }
            return false;
        },
        'avif': () => {
            const canvas = document.createElement('canvas');
            if (canvas.getContext && canvas.getContext('2d')) {
                return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
            }
            return false;
        },
        'intersectionObserver': () => 'IntersectionObserver' in window,
        'localStorage': () => {
            try {
                const test = '__localStorage_test__';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        },
        'serviceWorker': () => 'serviceWorker' in navigator
    };

    return features[feature] ? features[feature]() : false;
}

/**
 * Log with timestamp (for debugging)
 * @param {string} message - Message to log
 * @param {any} data - Additional data
 */
function debugLog(message, data = null) {
    if (typeof console !== 'undefined' && console.log) {
        const timestamp = new Date().toISOString();
        if (data) {
            console.log(`[${timestamp}] ${message}`, data);
        } else {
            console.log(`[${timestamp}] ${message}`);
        }
    }
}

// Export utilities for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        safeGetElement,
        safeQuerySelector,
        safeQuerySelectorAll,
        isInViewport,
        smoothScrollTo,
        addEventListeners,
        removeEventListeners,
        initLazyLoading,
        prefersReducedMotion,
        getBrowserInfo,
        supportsFeature,
        debugLog
    };
}
