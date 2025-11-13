document.addEventListener('DOMContentLoaded', function () {
  // Filter functionality with event delegation
  const filterContainer = document.querySelector('.filter-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  // results summary element (shows how many items are visible)
  const resultsSummaryEl = document.getElementById('resultsSummary');

  // compute and render counts per category and attach badges to filter buttons
  function updateFilterCounts() {
    const counts = { all: portfolioCards.length };
    portfolioCards.forEach(card => {
      const cat = card.getAttribute('data-category') || 'others';
      counts[cat] = (counts[cat] || 0) + 1;
    });

    filterButtons.forEach(btn => {
      const filter = btn.getAttribute('data-filter');
      const total = counts[filter] || 0;
      let span = btn.querySelector('.filter-count');
      if (!span) {
        span = document.createElement('span');
        span.className = 'filter-count';
        btn.appendChild(span);
      }
      span.textContent = total;
    });

    // initial results summary (based on active filter)
    const active = document.querySelector('.filter-btn.active');
    if (resultsSummaryEl && active) {
      const f = active.getAttribute('data-filter');
      const visible = f === 'all' ? counts['all'] : (counts[f] || 0);
      resultsSummaryEl.textContent = `Showing ${visible} item${visible !== 1 ? 's' : ''}`;
    }
  }

  // call once on load
  updateFilterCounts();

  if (!filterContainer) {
  console.warn('Filter container not found');
  return;
}

  // Improved filter: uses fade-in/out animation and aria updates
  if (filterContainer) {
    filterContainer.addEventListener('click', function (e) {
      const button = e.target.closest('.filter-btn');
      if (!button) return;

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

  const filter = button.getAttribute('data-filter');
      // Show matches with a small staggered delay. This makes the filtering feel smoother.
      const SHOW_BASE_DELAY = 120; // ms before first item shows
      const SHOW_STAGGER = 60; // ms additional delay per item

      const matchesList = Array.from(portfolioCards).filter(c => filter === 'all' || c.getAttribute('data-category') === filter);

      // First, handle non-matching cards: cancel any pending show timers and schedule hide
      portfolioCards.forEach(card => {
        const isMatch = matchesList.includes(card);
        if (!isMatch) {
          // cancel any pending show timer
          if (card._showTimer) {
            clearTimeout(card._showTimer);
            delete card._showTimer;
          }

          // remove possible fade-in state and schedule fade-out/hide
          card.classList.remove('fade-in');
          // remove any previous hide handler
          if (card._hideHandler) {
            card.removeEventListener('animationend', card._hideHandler);
            delete card._hideHandler;
          }

          card.classList.add('fade-out');
          card.setAttribute('aria-hidden', 'true');

          const onAnim = function () {
            card.style.display = 'none';
            card.classList.add('is-hidden');
            card.removeEventListener('animationend', onAnim);
            if (card._hideHandler === onAnim) delete card._hideHandler;
          };

          card._hideHandler = onAnim;
          card.addEventListener('animationend', onAnim);
        }
      });

      // Then, show matching cards with staggered timers
      matchesList.forEach((card, idx) => {
        // cancel any pending hide handler so it won't hide the card after we show it
        if (card._hideHandler) {
          card.removeEventListener('animationend', card._hideHandler);
          delete card._hideHandler;
        }

        // cancel any previous show timer for this card
        if (card._showTimer) {
          clearTimeout(card._showTimer);
          delete card._showTimer;
        }

        // ensure visible and remove hidden classes
        card.classList.remove('is-hidden');
        card.style.display = 'block';

        // prepare animation state
        card.classList.remove('fade-out');
        card.classList.remove('fade-in');
        // Use inline animationDelay so each card appears with a stagger
        const delayMs = SHOW_BASE_DELAY + idx * SHOW_STAGGER;
        card.style.animationDelay = `${delayMs}ms`;

        // schedule the add of fade-in after the delay
        const timer = setTimeout(() => {
          // ensure the card wasn't hidden in the meantime
          card.classList.add('fade-in');
          card.setAttribute('aria-hidden', 'false');
          // cleanup
          card.style.animationDelay = '';
          if (card._showTimer) delete card._showTimer;
        }, delayMs);

        card._showTimer = timer;
      });
      // update visible count immediately (matches count for chosen filter)
      if (resultsSummaryEl) {
        const visibleCount = filter === 'all'
          ? portfolioCards.length
          : Array.from(portfolioCards).filter(c => c.getAttribute('data-category') === filter).length;
        resultsSummaryEl.textContent = `Showing ${visibleCount} item${visibleCount !== 1 ? 's' : ''}`;
      }
    });
  }

  // Prevent right-click context menu
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Email form handler
  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userEmail = document.getElementById('emailInput').value;
      const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;
      window.open(mailToLink, '_blank');
      emailForm.reset();
    });
  }

  // Modal image viewer
  const modal = document.getElementById('fullscreenModal');
  const modalImg = document.getElementById('modalImage');
  let imageElements = Array.from(document.querySelectorAll('.portfolio-card .card-img img'));
  let currentIndex = 0;

  function showImage(index) {
    if (index >= 0 && index < imageElements.length) {
      currentIndex = index;
      modalImg.src = imageElements[currentIndex].src;
      modal.classList.add('show');
      // focus for accessibility
      modal.setAttribute('aria-hidden', 'false');
      modal.focus && modal.focus();
    }
  }

  // Make cards keyboard-focusable and wire Enter/Space to open modal for images
  portfolioCards.forEach((card, idx) => {
    // give a descriptive aria-label if not present
    const titleEl = card.querySelector('.card-title');
    const ariaLabel = titleEl ? `${titleEl.textContent.trim()} — ${card.getAttribute('data-category')}` : 'Portfolio item';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', ariaLabel);

    const img = card.querySelector('.card-img img');
    if (img) {
      img.addEventListener('click', () => showImage(imageElements.indexOf(img)));
    }

    card.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        if (img) {
          showImage(imageElements.indexOf(img));
        } else {
          // if no image, try to focus first iframe inside
          const iframe = card.querySelector('iframe');
          if (iframe) iframe.focus();
        }
      }
    });
  });

  // refresh imageElements in case DOM changes
  imageElements = Array.from(document.querySelectorAll('.portfolio-card .card-img img'));

  window.showNextImage = function () {
    showImage((currentIndex + 1) % imageElements.length);
  };

  window.showPrevImage = function () {
    showImage((currentIndex - 1 + imageElements.length) % imageElements.length);
  };

  window.closeFullscreen = function () {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) window.closeFullscreen();
    });
  }
  
  // Keyboard shortcuts for modal
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'Escape') {
      window.closeFullscreen();
    } else if (e.key === 'ArrowRight') {
      window.showNextImage();
    } else if (e.key === 'ArrowLeft') {
      window.showPrevImage();
    }
  });
});