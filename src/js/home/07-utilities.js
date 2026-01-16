/* ==========================
   HOMEPAGE UTILITIES
   ========================== */

// Initialize utilities on homepage using shared functionality
document.addEventListener('DOMContentLoaded', function() {
    // Use shared utilities functionality
    if (typeof disableContextMenu === 'function') {
        disableContextMenu();
    }
});