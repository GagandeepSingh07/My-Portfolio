/* ==========================
   MODAL IMAGE VIEWER
   ========================== */

function initModalViewer() {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('modalImage');
    const imageElements = Array.from(
        document.querySelectorAll(
            '.post .image-box img, .post .reel-box img:not(.play)'
        )
    );

    let currentIndex = 0;
    let lastFocused = null;
    const pageRoot = document.getElementById('parent') || document.body;

    function showImage(index) {
        if (index < 0 || index >= imageElements.length) return;

        currentIndex = index;
        modalImg.src = imageElements[currentIndex].src;

        lastFocused = document.activeElement;

        try {
            pageRoot.inert = true;
        } catch {}

        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        modal.focus?.();

        setTimeout(() => {
            document.addEventListener('click', globalModalCloseHandler, true);
        }, 0);
    }

    function closeFullscreen() {
        modal.classList.remove('show');

        document.removeEventListener('click', globalModalCloseHandler, true);

        if (lastFocused?.focus) lastFocused.focus();

        try {
            pageRoot.inert = false;
        } catch {}

        modal.setAttribute('aria-hidden', 'true');
    }

    function globalModalCloseHandler() {
        if (modal.classList.contains('show')) closeFullscreen();
    }

    document.addEventListener('keydown', e => {
        if (!modal.classList.contains('show')) return;

        if (e.key === 'Escape') closeFullscreen();
        if (e.key === 'ArrowRight') {
            showImage((currentIndex + 1) % imageElements.length);
        }
        if (e.key === 'ArrowLeft') {
            showImage(
                (currentIndex - 1 + imageElements.length) % imageElements.length
            );
        }
    });

    // Attach click handlers to images
    imageElements.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });

    // Close button handler
    const closeBtn = modal?.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeFullscreen);
    }

    // Arrow button handlers
    const leftArrow = modal?.querySelector('.arrow-btn.left');
    const rightArrow = modal?.querySelector('.arrow-btn.right');
    
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            showImage((currentIndex - 1 + imageElements.length) % imageElements.length);
        });
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            showImage((currentIndex + 1) % imageElements.length);
        });
    }
}