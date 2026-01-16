/* ==========================
   SIDEBAR MANAGEMENT
   ========================== */

// Close sidebar when sidebar links are clicked and disable scrolling when sidebar is active
function initSidebarAutoClose() {
    const sidebarCheckbox = document.getElementById('home-sidebar-action');
    const sidebarLinks = document.querySelectorAll('.home-sidebar a');
    
    if (sidebarCheckbox) {
        // Disable scrolling when sidebar is active
        sidebarCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close sidebar when links are clicked
        if (sidebarLinks.length > 0) {
            sidebarLinks.forEach(link => {
                link.addEventListener('click', function() {
                    sidebarCheckbox.checked = false;
                    document.body.style.overflow = '';
                });
            });
        }
    }
}