/* ==========================
   FILTER ANIMATION LOGIC
   ========================== */

function initFilterAnimation(filterContainer, filterButtons, portfolioSections, resultsSummaryEl) {
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
}