/* ============================================
   MAIN SHARED INITIALIZATION
   ============================================ */

// Initialize common features for all pages
document.addEventListener('DOMContentLoaded', () => {
    initSharedResumeLinks();
    initSharedEmailForm();
    disableContextMenu();
});