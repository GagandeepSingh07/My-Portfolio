/* ============================================
   SHARED EMAIL FORM FUNCTIONALITY - IMPROVED
   ============================================ */

/**
 * Initialize email form with enhanced validation and error handling
 * @returns {void}
 */
function initSharedEmailForm() {
    const emailForm = document.getElementById('emailForm');
    if (!emailForm) {
        console.warn('Email form not found on this page');
        return;
    }

    const emailInput = document.getElementById('emailInput');
    const submitButton = emailForm.querySelector('button[type="submit"]');

    if (!emailInput) {
        console.error('Email input field not found');
        return;
    }

    // Enhanced email validation regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    /**
     * Validate email format
     * @param {string} email - Email address to validate
     * @returns {boolean} - Whether email is valid
     */
    function validateEmail(email) {
        return emailRegex.test(email);
    }

    /**
     * Show error message
     * @param {string} message - Error message to display
     */
    function showError(message) {
        // Remove existing error if any
        const existingError = emailForm.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create error element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '8px';
        errorDiv.setAttribute('role', 'alert');
        errorDiv.setAttribute('aria-live', 'polite');

        emailForm.appendChild(errorDiv);

        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    /**
     * Show success feedback
     */
    function showSuccess() {
        if (!submitButton) return;

        const originalText = submitButton.textContent;
        const originalBg = submitButton.style.backgroundColor;

        submitButton.textContent = '✓ Sent!';
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = originalBg;
            submitButton.disabled = false;
        }, 3000);
    }

    /**
     * Handle form submission
     * @param {Event} event - Form submit event
     */
    function handleSubmit(event) {
        event.preventDefault();

        const userEmail = emailInput.value.trim();

        // Validate email
        if (!userEmail) {
            showError('Please enter your email address');
            emailInput.focus();
            return;
        }

        if (!validateEmail(userEmail)) {
            showError('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        // Check if CONFIG exists
        if (typeof CONFIG === 'undefined' || !CONFIG.emailRecipient) {
            console.error('CONFIG is not properly initialized');
            showError('Configuration error. Please try again later.');
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent('Portfolio Contact - New Submission');
        const body = encodeURIComponent(`Email from: ${userEmail}\n\nMessage:\n`);
        const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONFIG.emailRecipient}&su=${subject}&body=${body}`;

        try {
            // Open email client
            const emailWindow = window.open(mailToLink, '_blank');

            // Check if popup was blocked
            if (!emailWindow || emailWindow.closed || typeof emailWindow.closed === 'undefined') {
                showError('Please allow popups to send email. You can also email directly at: ' + CONFIG.emailRecipient);
                return;
            }

            // Success feedback
            emailForm.reset();
            showSuccess();

        } catch (error) {
            console.error('Failed to open email client:', error);
            showError('Failed to open email client. Please try again or email directly at: ' + CONFIG.emailRecipient);
        }
    }

    // Add submit event listener
    emailForm.addEventListener('submit', handleSubmit);

    // Real-time validation (optional)
    emailInput.addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && !validateEmail(value)) {
            this.setCustomValidity('Please enter a valid email address');
            this.reportValidity();
        } else {
            this.setCustomValidity('');
        }
    });

    // Clear custom validity on input
    emailInput.addEventListener('input', function() {
        this.setCustomValidity('');
    });

    console.log('Email form initialized successfully');
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedEmailForm);
} else {
    initSharedEmailForm();
}
