document.addEventListener('DOMContentLoaded', function () {
  /* ==========================
     FILTER SETUP
  ========================== */

  const filterContainer = document.querySelector('.filter-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioSections = document.querySelectorAll('.post-holder');
  const resultsSummaryEl = document.getElementById('resultsSummary');

  /* ==========================
     FILTER COUNT HANDLING
  ========================== */

  function updateFilterCounts() {
    const counts = { all: 0 };

    portfolioSections.forEach(section => {
      const cat = section.getAttribute('data-category');
      const itemCount = section.querySelectorAll('.post').length;

      counts[cat] = (counts[cat] || 0) + itemCount;
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
  }

  updateFilterCounts();

  if (!filterContainer) {
    console.warn('Filter container not found');
    return;
  }

  /* ==========================
     FILTER ANIMATION LOGIC
  ========================== */

  const cardState = new WeakMap();

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
    const SHOW_BASE_DELAY = 120;
    const SHOW_STAGGER = 60;

    const matchesList = Array.from(portfolioSections).filter(section => {
      if (filter === 'all') return true;
      return section.getAttribute('data-category') === filter;
    });

    portfolioSections.forEach(card => {
      const isMatch = matchesList.includes(card);
      const state = cardState.get(card) || {};

      if (!isMatch) {
        if (state.showTimer) {
          clearTimeout(state.showTimer);
          state.showTimer = null;
        }

        card.classList.remove('fade-in');

        if (state.hideHandler) {
          card.removeEventListener('animationend', state.hideHandler);
        }

        card.classList.add('fade-out');
        card.setAttribute('aria-hidden', 'true');

        const onAnimEnd = () => {
          card.style.display = 'none';
          card.classList.add('is-hidden');
          card.removeEventListener('animationend', onAnimEnd);
          state.hideHandler = null;
        };

        state.hideHandler = onAnimEnd;
        card.addEventListener('animationend', onAnimEnd);
        cardState.set(card, state);
      }
    });

    matchesList.forEach((card, idx) => {
      const state = cardState.get(card) || {};

      if (state.hideHandler) {
        card.removeEventListener('animationend', state.hideHandler);
        state.hideHandler = null;
      }

      if (state.showTimer) clearTimeout(state.showTimer);

      card.classList.remove('is-hidden', 'fade-out', 'fade-in');
      card.style.display = 'block';

      const delayMs = SHOW_BASE_DELAY + idx * SHOW_STAGGER;
      card.style.animationDelay = `${delayMs}ms`;

      state.showTimer = setTimeout(() => {
        card.classList.add('fade-in');
        card.setAttribute('aria-hidden', 'false');
        card.style.animationDelay = '';
        state.showTimer = null;
      }, delayMs);

      cardState.set(card, state);
    });

    if (resultsSummaryEl) {
      let visibleCount = 0;

      portfolioSections.forEach(section => {
        const cat = section.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          visibleCount += section.querySelectorAll('.post').length;
        }
      });

      resultsSummaryEl.textContent = `Showing ${visibleCount} item${
        visibleCount !== 1 ? 's' : ''
      }`;
    }
  });

  /* ==========================
     EMAIL FORM
  ========================== */

  const emailForm = document.getElementById('emailForm');

  if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const userEmail = document.getElementById('emailInput').value;
      const mailToLink =
        `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com` +
        `&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;

      window.open(mailToLink, '_blank');
      emailForm.reset();
    });
  }

  /* ==========================
     MODAL IMAGE VIEWER
  ========================== */

  const modal = document.getElementById('fullscreenModal');
  const modalImg = document.getElementById('modalImage');
  const imageElements = Array.from(
    document.querySelectorAll(
      '.post .image-box img, .post .reel-box img:not(.play)'
    )
  );

  let currentIndex = 0;
  let lastFocused = null;
  const pageRoot = document.getElementById('parent') || document.body;

  function showImage(index) {
    if (index < 0 || index >= imageElements.length) return;

    currentIndex = index;
    modalImg.src = imageElements[currentIndex].src;

    lastFocused = document.activeElement;

    try {
      pageRoot.inert = true;
    } catch {}

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.focus?.();

    setTimeout(() => {
      document.addEventListener('click', globalModalCloseHandler, true);
    }, 0);
  }

  function closeFullscreen() {
    modal.classList.remove('show');

    document.removeEventListener('click', globalModalCloseHandler, true);

    if (lastFocused?.focus) lastFocused.focus();

    try {
      pageRoot.inert = false;
    } catch {}

    modal.setAttribute('aria-hidden', 'true');
  }

  function globalModalCloseHandler() {
    if (modal.classList.contains('show')) closeFullscreen();
  }

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('show')) return;

    if (e.key === 'Escape') closeFullscreen();
    if (e.key === 'ArrowRight') {
      showImage((currentIndex + 1) % imageElements.length);
    }
    if (e.key === 'ArrowLeft') {
      showImage(
        (currentIndex - 1 + imageElements.length) % imageElements.length
      );
    }
  });
});

/* ==========================
   BADGE TEXT UPDATE
========================== */

const badgeTextMap = {
  'recent-badge': 'Recent',
  'replaced-badge': 'Replaced',
  'new-badge': 'New',
  'old-badge': 'Old'
};

Object.entries(badgeTextMap).forEach(([cls, text]) => {
  document.querySelectorAll(`div.${cls}`).forEach(el => {
    el.textContent = text;
  });
});

