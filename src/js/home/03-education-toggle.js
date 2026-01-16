/* ==========================
   EDUCATION TOGGLE
   ========================== */

// Function to handle education section style toggle
function initEducationStyleToggle() {
    const timelineBtn = document.getElementById('timeline-btn');
    const cardBtn = document.getElementById('card-btn');
    const timelineView = document.getElementById('timeline-view');
    const cardView = document.getElementById('card-view');
    
    if (timelineBtn && cardBtn && timelineView && cardView) {
        // Set initial active state
        timelineBtn.classList.add('active');
        
        timelineBtn.addEventListener('click', function() {
            timelineView.style.display = 'block';
            cardView.style.display = 'none';
            timelineBtn.classList.add('active');
            cardBtn.classList.remove('active');
        });
        
        cardBtn.addEventListener('click', function() {
            cardView.style.display = 'block';
            timelineView.style.display = 'none';
            cardBtn.classList.add('active');
            timelineBtn.classList.remove('active');
        });
    }
}