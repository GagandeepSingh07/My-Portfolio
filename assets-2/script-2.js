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

      // Use a WeakMap to store state associated with cards, avoiding direct property assignment
      const cardState = new WeakMap();

      const matchesList = Array.from(portfolioCards).filter(c => filter === 'all' || c.getAttribute('data-category') === filter);

      // First, handle non-matching cards: cancel any pending show timers and schedule hide
      portfolioCards.forEach(card => {
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

      // Then, show matching cards with staggered timers
      matchesList.forEach((card, idx) => {
        // cancel any pending hide handler so it won't hide the card after we show it
        if (card._hideHandler) {
          const state = cardState.get(card) || {};
          if (state.hideHandler) {
            card.removeEventListener('animationend', state.hideHandler);
            state.hideHandler = null;
            cardState.set(card, state);
          }
        }

        // cancel any previous show timer for this card
        clearTimeout((cardState.get(card) || {}).showTimer);

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
          const state = cardState.get(card);
          if (state) state.showTimer = null;
        }, delayMs);

        cardState.set(card, { ...cardState.get(card), showTimer: timer });
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
  // Get all images that are not the play icon for the modal viewer
  const imageElements = Array.from(document.querySelectorAll('.portfolio-card .card-img img:not(.play-icon)'));
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

  // Add event listeners to portfolio cards for modal or Instagram link
  portfolioCards.forEach(card => {
    // give a descriptive aria-label if not present
    const titleEl = card.querySelector('.card-title');
    const ariaLabel = titleEl ? `${titleEl.textContent.trim()} — ${card.getAttribute('data-category')}` : 'Portfolio item';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', ariaLabel);

    const instagramUrl = card.getAttribute('data-instagram-url');
    const img = card.querySelector('.card-img img:not(.play-icon)'); // The actual portfolio image

    // Check if card is a reel with Instagram URL
    if (instagramUrl) {
      // Make entire card clickable to open Instagram post
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        window.open(instagramUrl, '_blank');
      });

      card.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          window.open(instagramUrl, '_blank');
        }
      });
    } else if (img) {
      // Regular image cards - open in modal
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
    modal.setAttribute('aria-hidden', 'true');
  }

  if (modal) {
    // Assign events to modal controls
    document.getElementById('closeModal').addEventListener('click', closeFullscreen);
    document.getElementById('nextModal').addEventListener('click', showNextImage);
    document.getElementById('prevModal').addEventListener('click', showPrevImage);

    // Close modal if backdrop is clicked
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeFullscreen();
      }
    });
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