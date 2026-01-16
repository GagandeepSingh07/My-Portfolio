/* ============================================
   SHARED UTILITIES
   ============================================ */

// Disable right-click context menu
function disableContextMenu() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
}