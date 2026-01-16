/* ==========================
   MAIN INITIALIZATION
   ========================== */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize filter components
    const filterContainer = document.querySelector('.filter-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioSections = document.querySelectorAll('.post-holder');
    const resultsSummaryEl = document.getElementById('resultsSummary');

    if (!filterContainer) {
        console.warn('Filter container not found');
        return;
    }

    // Update filter counts
    updateFilterCounts(filterButtons, portfolioSections);

    // Initialize filter animation
    initFilterAnimation(filterContainer, filterButtons, portfolioSections, resultsSummaryEl);

    // Initialize email form
    initEmailForm();

    // Initialize modal viewer
    initModalViewer();

    // Badge text updates are handled automatically on script load
});