// Main.js - Shared functionality across all pages

// Configuration
const CONFIG = {
  emailRecipient: 'singhgagan40951@gmail.com'
};

// Initialize common features
document.addEventListener('DOMContentLoaded', () => {
  initResumeLinks();
  initEmailForm();
  disableContextMenu();
});

// Wire up resume links to canonical URL from meta tag
function initResumeLinks() {
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
    console.error('initResumeLinks error', e);
  }
}

// Email form handler
function initEmailForm() {
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

// Disable right-click context menu
function disableContextMenu() {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
}
