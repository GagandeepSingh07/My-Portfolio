/* ==========================
   NAVIGATION & SCROLLING - IMPROVED
   ========================== */

(function() {
    'use strict';

    /**
     * Initialize smooth scroll for navigation buttons
     */
    function initSmoothScroll() {
        // Get all scroll buttons
        const scrollButtons = {
            myWork: safeGetElement('my-work'),
            myWorkMobile: safeGetElement('my-work-mobile'),
            viewWork: safeGetElement('view-work'),
            touch: safeGetElement('touch')
        };

        // Scroll targets
        const scrollTargets = {
            portfolio: safeGetElement('explore-redirect-link'),
            contact: safeGetElement('social-links')
        };

        /**
         * Handle scroll to target
         * @param {HTMLElement} target - Target element to scroll to
         */
        function scrollToTarget(target) {
            if (!target) {
                console.warn('Scroll target not found');
                return;
            }

            smoothScrollTo(target, {
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                block: 'start'
            });
        }

        // Attach event listeners to portfolio buttons
        if (scrollButtons.myWork) {
            scrollButtons.myWork.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToTarget(scrollTargets.portfolio);
            });
        }

        if (scrollButtons.myWorkMobile) {
            scrollButtons.myWorkMobile.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToTarget(scrollTargets.portfolio);
            });
        }

        if (scrollButtons.viewWork) {
            scrollButtons.viewWork.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToTarget(scrollTargets.portfolio);
            });
        }

        // Attach event listener to contact button
        if (scrollButtons.touch) {
            scrollButtons.touch.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToTarget(scrollTargets.contact);
            });
        }

        console.log('Smooth scroll navigation initialized');
    }

    /**
     * Initialize scroll to top functionality
     */
    function initScrollToTop() {
        const scrollToTopLinks = document.querySelectorAll('a[href="#top"], .scrolltotop, .scrolltotopsvg');
        
        scrollToTopLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                window.scrollTo({
                    top: 0,
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
                });
            });
        });

        console.log('Scroll to top initialized');
    }

    /**
     * Handle navigation links with smooth scroll
     */
    function initNavLinks() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#" or already handled
            if (href === '#' || href === '#top') return;
            
            link.addEventListener('click', (e) => {
                const targetId = href.substring(1);
                const target = safeGetElement(targetId);
                
                if (target) {
                    e.preventDefault();
                    smoothScrollTo(target, {
                        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const sidebarCheckbox = safeGetElement('home-sidebar-action');
                    if (sidebarCheckbox && sidebarCheckbox.checked) {
                        sidebarCheckbox.checked = false;
                    }
                }
            });
        });

        console.log('Navigation links initialized');
    }

    /**
     * Add active state to nav links based on scroll position
     */
    function initActiveNavTracking() {
        const sections = document.querySelectorAll('section[id], main[id], header[id]');
        const navLinks = document.querySelectorAll('.home-nav-links a[href^="#"]');
        
        if (sections.length === 0 || navLinks.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to current link
                    const activeLink = document.querySelector(`.home-nav-links a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        });

        sections.forEach(section => observer.observe(section));

        console.log('Active navigation tracking initialized');
    }

    /**
     * Show/hide header on scroll
     */
    function initHeaderScroll() {
        const header = document.querySelector('.home-header');
        if (!header) return;

        let lastScrollTop = 0;
        const scrollThreshold = 100; // Only hide after scrolling this much

        const handleScroll = throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 100);

        window.addEventListener('scroll', handleScroll);

        console.log('Header scroll behavior initialized');
    }

    /**
     * Initialize all navigation features
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initSmoothScroll();
                initScrollToTop();
                initNavLinks();
                
                // Only init these if IntersectionObserver is supported
                if ('IntersectionObserver' in window) {
                    initActiveNavTracking();
                }
                
                // Optional: uncomment if you want hiding header
                // initHeaderScroll();
            });
        } else {
            initSmoothScroll();
            initScrollToTop();
            initNavLinks();
            
            if ('IntersectionObserver' in window) {
                initActiveNavTracking();
            }
            
            // initHeaderScroll();
        }
    }

    // Initialize
    init();

})();
