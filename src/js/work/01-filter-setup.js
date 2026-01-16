/* ==========================
   FILTER SETUP
   ========================== */

document.addEventListener('DOMContentLoaded', function () {
    const filterContainer = document.querySelector('.filter-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioSections = document.querySelectorAll('.post-holder');
    const resultsSummaryEl = document.getElementById('resultsSummary');

    if (!filterContainer) {
        console.warn('Filter container not found');
        return;
    }

    return {
        filterContainer,
        filterButtons,
        portfolioSections,
        resultsSummaryEl
    };
});