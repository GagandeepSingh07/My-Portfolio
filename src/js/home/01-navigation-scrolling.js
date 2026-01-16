/* ==========================
   NAVIGATION & SCROLLING
   ========================== */

// Smooth scroll handlers for navigation buttons
const btnMyWork = document.getElementById('my-work');
if (btnMyWork) {
    btnMyWork.addEventListener('click', function() {
        const target = document.getElementById('explore-redirect-link');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

const btnMyWorkMobile = document.getElementById('my-work-mobile');
if (btnMyWorkMobile) {
    btnMyWorkMobile.addEventListener('click', function() {
        const target = document.getElementById('explore-redirect-link');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

const btnViewWork = document.getElementById('view-work');
if (btnViewWork) {
    btnViewWork.addEventListener('click', function() {
        const target = document.getElementById('explore-redirect-link');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

const btnTouch = document.getElementById('touch');
if (btnTouch) {
    btnTouch.addEventListener('click', function() {
        const target = document.getElementById('social-links');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}