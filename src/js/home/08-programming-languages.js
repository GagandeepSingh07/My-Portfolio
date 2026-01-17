/* ==========================
   PROGRAMMING LANGUAGES INTERACTIONS
   ========================== */

document.addEventListener('DOMContentLoaded', function() {
    // Get all language cards
    const langCards = document.querySelectorAll('.lang-card');
    
    // Add click interaction to cards
    langCards.forEach(card => {
        card.addEventListener('click', function() {
            const langName = this.dataset.lang;
            const langLevel = this.dataset.level;
            
            // Create ripple effect
            createRippleEffect(this);
            
            // Log language info (could be extended for more functionality)
            console.log(`${langName} - ${langLevel}`);
        });
        
        // Add mouse move effect for subtle parallax
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            // Subtle tilt effect
            this.style.transform = `translateY(-5px) scale(1.05) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
        });
        
        // Reset transform on mouse leave
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Create ripple effect function
    function createRippleEffect(element) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add ripple animation to CSS if not already present
    if (!document.querySelector('#lang-ripple-style')) {
        const style = document.createElement('style');
        style.id = 'lang-ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});