/* ============================================
   BROWSER COMPATIBILITY & POLYFILLS
   ============================================ */

(function() {
    'use strict';

    /**
     * Check browser compatibility and add polyfills
     */
    
    // 1. IntersectionObserver Polyfill (for older browsers)
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported. Consider adding polyfill.');
        
        // Fallback: disable features that require IntersectionObserver
        window.FALLBACK_MODE = true;
    }

    // 2. Smooth Scroll Polyfill
    if (!('scrollBehavior' in document.documentElement.style)) {
        console.warn('Smooth scroll not supported. Using fallback.');
        
        // Polyfill smoothscroll for browsers that don't support it
        (function() {
            const smoothScroll = function(target, duration = 600) {
                const targetElement = typeof target === 'string' 
                    ? document.querySelector(target) 
                    : target;
                    
                if (!targetElement) return;

                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }

                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            };

            // Override scrollIntoView if needed
            Element.prototype.smoothScrollIntoView = function() {
                smoothScroll(this);
            };
        })();
    }

    // 3. Array.from Polyfill (for IE11)
    if (!Array.from) {
        Array.from = function(arrayLike) {
            return Array.prototype.slice.call(arrayLike);
        };
    }

    // 4. Object.assign Polyfill (for IE11)
    if (typeof Object.assign !== 'function') {
        Object.defineProperty(Object, 'assign', {
            value: function assign(target, ...sources) {
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                const to = Object(target);
                sources.forEach(source => {
                    if (source != null) {
                        for (const key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                to[key] = source[key];
                            }
                        }
                    }
                });
                return to;
            },
            writable: true,
            configurable: true
        });
    }

    // 5. NodeList.forEach Polyfill (for IE11)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    // 6. requestAnimationFrame Polyfill
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    // 7. CustomEvent Polyfill (for IE11)
    if (typeof window.CustomEvent !== 'function') {
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: null };
            const evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    }

    // 8. closest() Polyfill (for IE11)
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                    Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            let el = this;
            do {
                if (Element.prototype.matches.call(el, s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }

    // 9. Check for required features
    const requiredFeatures = {
        'localStorage': supportsFeature('localStorage'),
        'CSS Grid': CSS.supports('display', 'grid'),
        'CSS Flexbox': CSS.supports('display', 'flex'),
        'CSS Variables': CSS.supports('--test-var', '0'),
        'Fetch API': 'fetch' in window,
        'Promise': 'Promise' in window
    };

    // Log compatibility issues
    const unsupportedFeatures = Object.keys(requiredFeatures)
        .filter(feature => !requiredFeatures[feature]);

    if (unsupportedFeatures.length > 0) {
        console.warn('Unsupported features:', unsupportedFeatures);
    } else {
        console.log('All required features supported!');
    }

    // 10. Add browser-specific classes to HTML element
    const html = document.documentElement;
    const browserInfo = getBrowserInfo();
    
    html.classList.add(`browser-${browserInfo.name.toLowerCase()}`);
    html.classList.add(`browser-version-${browserInfo.version?.split('.')[0] || 'unknown'}`);

    // Add feature detection classes
    if (supportsFeature('webp')) html.classList.add('webp');
    if (supportsFeature('avif')) html.classList.add('avif');
    if ('IntersectionObserver' in window) html.classList.add('intersection-observer');
    if (supportsFeature('localStorage')) html.classList.add('localstorage');

    // 11. Console warning for old browsers
    const isOldBrowser = () => {
        const ua = navigator.userAgent;
        return (
            /MSIE|Trident/.test(ua) || // IE
            (/Chrome\/([0-9]+)/.exec(ua)?.[1] || 999) < 80 || // Old Chrome
            (/Firefox\/([0-9]+)/.exec(ua)?.[1] || 999) < 75 || // Old Firefox
            (/Safari\/([0-9]+)/.exec(ua)?.[1] || 999) < 13 // Old Safari
        );
    };

    if (isOldBrowser()) {
        console.warn(
            '%c⚠️ You are using an outdated browser. Some features may not work correctly.',
            'color: orange; font-size: 14px; font-weight: bold;'
        );
        
        // Optionally show banner to user
        showBrowserWarning();
    }

    /**
     * Show browser update warning banner
     */
    function showBrowserWarning() {
        // Check if user already dismissed the warning
        if (supportsFeature('localStorage') && localStorage.getItem('browserWarningDismissed')) {
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'browser-warning';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #ff9800;
            color: white;
            padding: 12px 20px;
            text-align: center;
            z-index: 10000;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        `;
        
        banner.innerHTML = `
            <span>⚠️ Your browser is outdated. Please update for the best experience.</span>
            <button id="dismiss-warning" style="
                background: white;
                color: #ff9800;
                border: none;
                padding: 4px 12px;
                margin-left: 15px;
                border-radius: 3px;
                cursor: pointer;
                font-weight: bold;
            ">Dismiss</button>
        `;
        
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Add margin to body to prevent content from being hidden
        document.body.style.marginTop = banner.offsetHeight + 'px';
        
        // Dismiss handler
        document.getElementById('dismiss-warning').addEventListener('click', () => {
            banner.remove();
            document.body.style.marginTop = '0';
            
            if (supportsFeature('localStorage')) {
                localStorage.setItem('browserWarningDismissed', 'true');
            }
        });
    }

    // 12. Print compatibility report to console
    console.group('🔍 Browser Compatibility Report');
    console.log('Browser:', browserInfo.name, browserInfo.version);
    console.log('Features:', requiredFeatures);
    console.log('Polyfills loaded:', unsupportedFeatures.length > 0 ? 'Yes' : 'No');
    console.groupEnd();

})();
