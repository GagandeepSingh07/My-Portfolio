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


// window.addEventListener('load', function() {
// document.querySelector('.nav-load-animation').classList.add('visible-2');
// });

window.addEventListener('load', function() {
  const heroLeft = document.querySelector('.hero-left');
  if (heroLeft) heroLeft.classList.add('visible');
  const heroRight = document.querySelector('.hero-right');
  if (heroRight) heroRight.classList.add('visible');
  const introLeft = document.querySelector('.intro-to-left');
  if (introLeft) introLeft.classList.add('visible');
  const introRight = document.querySelector('.intro-img-right');
  if (introRight) introRight.classList.add('visible');
  
  // Initialize education section style toggle
  initEducationStyleToggle();
  // Initialize resume link wiring (reads canonical URL from meta)
  initResumeLinks();

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

// Function to handle education section style toggle
function initEducationStyleToggle() {
  const timelineBtn = document.getElementById('timeline-btn');
  const cardBtn = document.getElementById('card-btn');
  const timelineView = document.getElementById('timeline-view');
  const cardView = document.getElementById('card-view');
  
  if (timelineBtn && cardBtn && timelineView && cardView) {
    // Set initial active state
    timelineBtn.classList.add('active');
    
    timelineBtn.addEventListener('click', function() {
      timelineView.style.display = 'block';
      cardView.style.display = 'none';
      timelineBtn.classList.add('active');
      cardBtn.classList.remove('active');
    });
    
    cardBtn.addEventListener('click', function() {
      cardView.style.display = 'block';
      timelineView.style.display = 'none';
      cardBtn.classList.add('active');
      timelineBtn.classList.remove('active');
    });
  }
}

// Wire up resume links to a single canonical URL defined in a <meta name="resume-url"> tag.
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

    // 2) Update anchors that already point to a Drive file (covers existing hard-coded links)
    document.querySelectorAll('a[href*="drive.google.com/file/d/"]').forEach(a => {
      a.setAttribute('href', canonical);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    // 3) Update anchors whose visible text is 'Resume' (case-insensitive)
    document.querySelectorAll('a').forEach(a => {
      if (a.textContent && a.textContent.trim().toLowerCase() === 'resume') {
        a.setAttribute('href', canonical);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  } catch (e) {
    // fail silently in older browsers
    console.error('initResumeLinks error', e);
  }
}

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);


  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailInput = document.getElementById('emailInput');
      const userEmail = emailInput ? emailInput.value : '';
      const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;
      window.open(mailToLink, '_blank');
      emailForm.reset();
    });
  }