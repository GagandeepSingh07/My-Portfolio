/* ============================================
   SHARED EMAIL FORM FUNCTIONALITY
   ============================================ */

// Email form handler
function initSharedEmailForm() {
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('emailInput');
            const userEmail = emailInput ? emailInput.value : '';
            const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONFIG.emailRecipient}&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;
            window.open(mailToLink, '_blank');
            emailForm.reset();
        });
    }
}