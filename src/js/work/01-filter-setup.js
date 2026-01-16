/* ==========================
   FILTER SETUP - IMPROVED
   ========================== */

(function() {
    'use strict';

    // Global state
    let currentFilter = 'all';
    let portfolioData = {
        filterButtons: null,
        portfolioSections: null,
        resultsSummaryEl: null,
        initialized: false
    };

    /**
     * Initialize filter system
     */
    function initFilterSetup() {
        // Find elements
        const filterContainer = document.querySelector('.filter-container');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioSections = document.querySelectorAll('.post-holder');
        const resultsSummaryEl = document.getElementById('resultsSummary');

        // Check if elements exist
        if (!filterContainer) {
            console.warn('Filter container not found - skipping filter initialization');
            return false;
        }

        if (filterButtons.length === 0) {
            console.warn('No filter buttons found');
            return false;
        }

        if (portfolioSections.length === 0) {
            console.warn('No portfolio sections found');
            return false;
        }

        // Store in global state
        portfolioData = {
            filterButtons: Array.from(filterButtons),
            portfolioSections: Array.from(portfolioSections),
            resultsSummaryEl,
            initialized: true
        };

        // Attach event listeners
        attachFilterListeners();

        // Initialize counts
        updateFilterCounts();

        // Set initial active filter
        setActiveFilter('all');

        console.log('Filter system initialized successfully');
        return true;
    }

    /**
     * Attach click listeners to filter buttons
     */
    function attachFilterListeners() {
        portfolioData.filterButtons.forEach(button => {
            button.addEventListener('click', handleFilterClick);
        });
    }

    /**
     * Handle filter button click
     * @param {Event} event - Click event
     */
    function handleFilterClick(event) {
        const button = event.currentTarget;
        const filter = button.dataset.filter;

        if (!filter) {
            console.error('Button missing data-filter attribute');
            return;
        }

        // Don't do anything if clicking the same filter
        if (filter === currentFilter) return;

        // Update current filter
        currentFilter = filter;

        // Update UI
        setActiveFilter(filter);
        filterPortfolioItems(filter);
        updateResultsSummary(filter);
    }

    /**
     * Set active state on filter button
     * @param {string} filter - Filter category
     */
    function setActiveFilter(filter) {
        portfolioData.filterButtons.forEach(button => {
            if (button.dataset.filter === filter) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-pressed', 'false');
            }
        });
    }

    /**
     * Filter portfolio items
     * @param {string} filter - Filter category
     */
    function filterPortfolioItems(filter) {
        let visibleCount = 0;

        portfolioData.portfolioSections.forEach((section, index) => {
            const categories = section.dataset.category 
                ? section.dataset.category.split(' ')
                : [];

            const shouldShow = filter === 'all' || categories.includes(filter);

            // Add animation delay based on index
            const delay = index * 50; // 50ms between each item

            if (shouldShow) {
                // Show with animation
                setTimeout(() => {
                    section.style.display = 'block';
                    section.classList.remove('hidden');
                    section.classList.add('visible');
                    
                    // Trigger animation
                    requestAnimationFrame(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    });
                }, delay);
                
                visibleCount++;
            } else {
                // Hide with animation
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.classList.remove('visible');
                section.classList.add('hidden');
                
                setTimeout(() => {
                    section.style.display = 'none';
                }, 300); // Match CSS transition duration
            }
        });

        // Update results count
        return visibleCount;
    }

    /**
     * Update filter button counts
     */
    function updateFilterCounts() {
        const counts = {
            all: portfolioData.portfolioSections.length
        };

        // Count items in each category
        portfolioData.portfolioSections.forEach(section => {
            const categories = section.dataset.category
                ? section.dataset.category.split(' ')
                : [];

            categories.forEach(category => {
                counts[category] = (counts[category] || 0) + 1;
            });
        });

        // Update button text with counts
        portfolioData.filterButtons.forEach(button => {
            const filter = button.dataset.filter;
            const count = counts[filter] || 0;
            const buttonText = button.textContent.trim().split('(')[0].trim();
            
            button.textContent = `${buttonText} (${count})`;
            
            // Disable button if no items
            if (count === 0) {
                button.disabled = true;
                button.classList.add('disabled');
            }
        });
    }

    /**
     * Update results summary text
     * @param {string} filter - Current filter
     */
    function updateResultsSummary(filter) {
        if (!portfolioData.resultsSummaryEl) return;

        const visibleCount = portfolioData.portfolioSections.filter(section => {
            if (filter === 'all') return true;
            
            const categories = section.dataset.category
                ? section.dataset.category.split(' ')
                : [];
            
            return categories.includes(filter);
        }).length;

        const filterName = filter === 'all' 
            ? 'All Projects'
            : filter.charAt(0).toUpperCase() + filter.slice(1);

        portfolioData.resultsSummaryEl.textContent = 
            `Showing ${visibleCount} ${filterName}`;
        
        // Announce to screen readers
        portfolioData.resultsSummaryEl.setAttribute('aria-live', 'polite');
    }

    /**
     * Reset all filters
     */
    function resetFilters() {
        currentFilter = 'all';
        setActiveFilter('all');
        filterPortfolioItems('all');
        updateResultsSummary('all');
    }

    /**
     * Public API
     */
    window.PortfolioFilter = {
        init: initFilterSetup,
        reset: resetFilters,
        setFilter: (filter) => {
            setActiveFilter(filter);
            filterPortfolioItems(filter);
            updateResultsSummary(filter);
        },
        getCurrentFilter: () => currentFilter,
        isInitialized: () => portfolioData.initialized
    };

    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilterSetup);
    } else {
        initFilterSetup();
    }

})();
