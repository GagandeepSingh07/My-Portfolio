document.addEventListener('DOMContentLoaded', function () {
  // Filter functionality with event delegation
  const filterContainer = document.querySelector('.filter-btns');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (filterContainer) {
    filterContainer.addEventListener('click', function (e) {
      const button = e.target.closest('.filter-btn');
      if (!button) return;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      portfolioCards.forEach(card => {
        card.style.display =
          filter === 'all' || card.getAttribute('data-category') === filter
            ? 'block'
            : 'none';
      });
    });
  }

  // Prevent right-click context menu
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Email form handler
  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userEmail = document.getElementById('emailInput').value;
      const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;
      window.open(mailToLink, '_blank');
      emailForm.reset();
    });
  }

  // Modal image viewer
  const modal = document.getElementById('fullscreenModal');
  const modalImg = document.getElementById('modalImage');
  const imageElements = document.querySelectorAll('.portfolio-card .card-img img');
  let currentIndex = 0;

  function showImage(index) {
    if (index >= 0 && index < imageElements.length) {
      currentIndex = index;
      modalImg.src = imageElements[currentIndex].src;
      modal.classList.add('show');
    }
  }

  imageElements.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  window.showNextImage = function () {
    showImage((currentIndex + 1) % imageElements.length);
  };

  window.showPrevImage = function () {
    showImage((currentIndex - 1 + imageElements.length) % imageElements.length);
  };

  window.closeFullscreen = function () {
    modal.classList.remove('show');
  };

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) window.closeFullscreen();
    });
  }
});