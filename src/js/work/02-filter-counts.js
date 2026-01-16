/* ==========================
   FILTER COUNT HANDLING
   ========================== */

function updateFilterCounts(filterButtons, portfolioSections) {
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