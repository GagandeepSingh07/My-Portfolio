/* ==========================
   HOMEPAGE EMAIL FORM
   ========================== */

// Initialize email form on homepage using shared functionality
const emailForm = document.getElementById('emailForm');
if (emailForm) {
    // Use shared email form functionality
    if (typeof initSharedEmailForm === 'function') {
        initSharedEmailForm();
    }
}