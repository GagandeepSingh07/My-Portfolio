/* ==========================
   PAGE LOAD & ANIMATIONS
   ========================== */

window.addEventListener('load', function() {
    // Add visible classes to trigger animations
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) heroLeft.classList.add('visible');
    
    const heroRight = document.querySelector('.hero-right');
    if (heroRight) heroRight.classList.add('visible');
    
    const introLeft = document.querySelector('.intro-to-left');
    if (introLeft) introLeft.classList.add('visible');
    
    const introRight = document.querySelector('.intro-img-right');
    if (introRight) introRight.classList.add('visible');
    
    // Initialize other components
    initEducationStyleToggle();
    initResumeLinks();
    initSidebarAutoClose();

    // Fade out and remove site loader if present (wait 1s before starting fade)
    try {
        const loader = document.getElementById('site-loader');
        if (loader) {
            // Keep the loader visible for 1 second after load, then fade it out
            setTimeout(() => {
                loader.classList.add('fade-out');
                // Remove from DOM after transition completes (match CSS transition ~600ms)
                setTimeout(() => {
                    if (loader.parentNode) loader.parentNode.removeChild(loader);
                }, 700);
            }, 1000);
        }
    } catch (e) {
        // ignore errors related to loader removal
        console.warn('Loader removal error', e);
    }
});