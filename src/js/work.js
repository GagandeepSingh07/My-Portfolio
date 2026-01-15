document.addEventListener('DOMContentLoaded', function () {
  // Filter functionality with event delegation
  const filterContainer = document.querySelector('.filter-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioSections = document.querySelectorAll('.post-holder');

  // results summary element (shows how many items are visible)
  const resultsSummaryEl = document.getElementById('resultsSummary');

  // Map category names from HTML to filter values
  const categoryMap = {
    'Social Media Posts': 'social-media',
    '3D Work': '3d-work',
    'Logos': 'logos',
    'Animation': 'animation',
    'Videos': 'videos',
    'Reels': 'reels',
    'Gaming': 'gaming',
    'Certificates': 'certificates'
  };

  // compute and render counts per category and attach badges to filter buttons
  function updateFilterCounts() {
    const counts = { all: 0 };
    portfolioSections.forEach(section => {
      const cat = section.getAttribute('data-category');
      const filterKey = categoryMap[cat] || 'others';
      const itemCount = section.querySelectorAll('.post').length;
      counts[filterKey] = (counts[filterKey] || 0) + itemCount;
      counts.all += itemCount;
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
  const cardState = new WeakMap(); // Move outside the event listener
  
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
      const SHOW_STAGGER = 60; // ms additional delay per section

      const matchesList = Array.from(portfolioSections).filter(section => {
        if (filter === 'all') return true;
        const cat = section.getAttribute('data-category');
        return categoryMap[cat] === filter;
      });

      // First, handle non-matching sections: cancel any pending show timers and schedule hide
      portfolioSections.forEach(card => {
        const isMatch = matchesList.includes(card);
        if (!isMatch) {
          // cancel any pending show timer
          const state = cardState.get(card) || {};
          if (state.showTimer) {
            clearTimeout(state.showTimer);
            state.showTimer = null;
          }

          // remove possible fade-in state and schedule fade-out/hide
          card.classList.remove('fade-in');
          // remove any previous hide handler
          if (state.hideHandler) {
            card.removeEventListener('animationend', state.hideHandler);
            state.hideHandler = null;
          }

          card.classList.add('fade-out');
          card.setAttribute('aria-hidden', 'true');

          const onAnimEnd = function () {
            card.style.display = 'none';
            card.classList.add('is-hidden');
            card.removeEventListener('animationend', onAnimEnd);
            const currentState = cardState.get(card);
            if (currentState && currentState.hideHandler === onAnimEnd) {
              currentState.hideHandler = null;
            }
          };

          state.hideHandler = onAnimEnd;
          card.addEventListener('animationend', onAnimEnd);
          cardState.set(card, state);
        }
      });

      // Then, show matching sections with staggered timers
      matchesList.forEach((card, idx) => {
        // cancel any pending hide handler so it won't hide the card after we show it
        const state = cardState.get(card) || {};
        if (state.hideHandler) {
          card.removeEventListener('animationend', state.hideHandler);
          state.hideHandler = null;
        }

        // cancel any previous show timer for this card
        if (state.showTimer) {
          clearTimeout(state.showTimer);
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
          const currentState = cardState.get(card);
          if (currentState) {
            currentState.showTimer = null;
            cardState.set(card, currentState);
          }
        }, delayMs);

        state.showTimer = timer;
        cardState.set(card, state);
      });
      
      // update visible count immediately (matches count for chosen filter)
      if (resultsSummaryEl) {
        let visibleCount = 0;
        if (filter === 'all') {
          portfolioSections.forEach(section => {
            visibleCount += section.querySelectorAll('.post').length;
          });
        } else {
          portfolioSections.forEach(section => {
            const cat = section.getAttribute('data-category');
            if (categoryMap[cat] === filter) {
              visibleCount += section.querySelectorAll('.post').length;
            }
          });
        }
        resultsSummaryEl.textContent = `Showing ${visibleCount} item${visibleCount !== 1 ? 's' : ''}`;
      }
    });
  }

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
  // Global click handler to close modal when clicking anywhere on the page
  function globalModalCloseHandler(e) {
    // if modal not open, nothing to do
    if (!modal || !modal.classList.contains('show')) return;
    // debug
    console.debug('global click detected while modal open, closing modal');
    closeFullscreen();
  }
  // Get all images that are not the play icon for the modal viewer
  const imageElements = Array.from(document.querySelectorAll('.post .image-box img, .post .reel-box img:not(.play)'));
  let currentIndex = 0;

  // track last focused element so we can restore focus when modal closes
  let lastFocused = null;
  const pageRoot = document.getElementById('parent') || document.body;

  function showImage(index) {
    if (index >= 0 && index < imageElements.length) {
      currentIndex = index;
      modalImg.src = imageElements[currentIndex].src;
      // save current focus and make background inert so it's not focusable
      lastFocused = document.activeElement;
      try {
        pageRoot.inert = true;
      } catch (err) {
        // if inert not supported, it's ok — polyfill should handle it when loaded
      }

      modal.classList.add('show');
      // focus for accessibility
      modal.setAttribute('aria-hidden', 'false');
      modal.focus && modal.focus();
      // attach a global click handler on the next tick so the original click
      // that opened the modal doesn't immediately close it
      setTimeout(() => {
        try {
          document.addEventListener('click', globalModalCloseHandler, true);
        } catch (e) {
          // ignore
        }
      }, 0);
    }
  }

  // Add event listeners to posts for modal or Instagram link
  const portfolioCards = document.querySelectorAll('.post');
  portfolioCards.forEach(card => {
    // give a descriptive aria-label if not present
    const titleEl = card.querySelector('.title');
    const categoryEl = card.querySelector('.category');
    const ariaLabel = titleEl ? `${titleEl.textContent.trim()}${categoryEl ? ' — ' + categoryEl.textContent.trim() : ''}` : 'Portfolio item';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', ariaLabel);

    // Check if this is a reel (has a parent anchor tag)
    const parentLink = card.closest('a.reel');
    const img = card.querySelector('.image-box img, .reel-box img:not(.play)'); // The actual portfolio image

    // Check if card is a reel with Instagram/external URL
    if (parentLink) {
      // Make entire card clickable to open Instagram post
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(parentLink.href, '_blank');
      });

      card.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          window.open(parentLink.href, '_blank');
        }
      });
    } else if (img && !card.querySelector('.landing-box iframe')) {
      // Regular image cards (not videos) - open in modal
      const imageIndex = imageElements.indexOf(img);
      if (imageIndex === -1) return; // Should not happen if logic is correct

      card.style.cursor = 'pointer';
      card.addEventListener('click', () => showImage(imageIndex));

      card.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          showImage(imageElements.indexOf(img));
        }
      });
    }
  });

  function showNextImage() {
    showImage((currentIndex + 1) % imageElements.length);
  }

  function showPrevImage() {
    showImage((currentIndex - 1 + imageElements.length) % imageElements.length);
  }

  function closeFullscreen() {
    modal.classList.remove('show');

    // remove global click handler if present
    try {
      document.removeEventListener('click', globalModalCloseHandler, true);
    } catch (e) {
      // ignore
    }

    // restore focus before hiding the modal to avoid aria-hidden focus warnings
    if (lastFocused && typeof lastFocused.focus === 'function') {
      try { lastFocused.focus(); } catch (e) { document.activeElement.blur(); }
    } else {
      try { document.activeElement.blur(); } catch (e) { /* ignore */ }
    }

    // remove inert from the main content and then hide from assistive tech
    try {
      pageRoot.inert = false;
    } catch (err) {
      // ignore if inert unsupported
    }

    modal.setAttribute('aria-hidden', 'true');
  }

  if (modal) {
    // Assign events to modal controls if they exist
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeFullscreen);
    }

    // Close modal if backdrop or image is clicked (robust fallback)
    modal.addEventListener('click', e => {
      // debug
      console.debug('modal click target:', e.target);
      if (e.target === modal || e.target === modalImg) {
        console.debug('closing modal via backdrop/image click');
        closeFullscreen();
      }
    });

    // Close modal when the image itself is clicked (toggle behavior)
    if (modalImg) {
      // Make image focusable for keyboard users
      modalImg.tabIndex = 0;
      modalImg.addEventListener('click', (e) => {
        // stop propagation to avoid duplicate handling by backdrop listener
        e.stopPropagation();
        console.debug('modal image clicked');
        closeFullscreen();
      });

      modalImg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          closeFullscreen();
        }
      });
    }
  }
  
  // Keyboard shortcuts for modal
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'Escape') {
      closeFullscreen();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'ArrowLeft') {
      showPrevImage();
    }
  });
});


//Badge Text Update Script

const badgeTextMap = {
        "recent-badge": "Recent",
        "replaced-badge": "Replaced",
        "new-badge": "New",
        "old-badge": "Old",
      };

      document.querySelectorAll("div").forEach((el) => {
        Object.keys(badgeTextMap).forEach((cls) => {
          if (el.classList.contains(cls)) {
            el.textContent = badgeTextMap[cls];
          }
        });
      });
