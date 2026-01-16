/* ============================================
   SHARED RESUME LINKS FUNCTIONALITY
   ============================================ */

// Wire up resume links to canonical URL from meta tag
function initSharedResumeLinks() {
    try {
        const meta = document.querySelector('meta[name="resume-url"]');
        const canonical = meta ? meta.getAttribute('content') : null;
        if (!canonical) return;

        // 1) Update anchors with explicit class or data attribute
        document.querySelectorAll('a.resume-link, a[data-resume]').forEach(a => {
            a.setAttribute('href', canonical);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        });

        // 2) Update anchors that already point to a Drive file
        document.querySelectorAll('a[href*="drive.google.com/file/d/"]').forEach(a => {
            a.setAttribute('href', canonical);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        });

        // 3) Update anchors whose visible text is 'Resume'
        document.querySelectorAll('a').forEach(a => {
            if (a.textContent && a.textContent.trim().toLowerCase() === 'resume') {
                a.setAttribute('href', canonical);
                a.setAttribute('target', '_blank');
                a.setAttribute('rel', 'noopener noreferrer');
            }
        });
    } catch (e) {
        console.error('initSharedResumeLinks error', e);
    }
}