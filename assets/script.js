const btnMyWork = document.getElementById('my-work');
if (btnMyWork) {
  btnMyWork.addEventListener('click', function() {
      const target = document.getElementById('explore-redirect-link');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

const btnMyWorkMobile = document.getElementById('my-work-mobile');
if (btnMyWorkMobile) {
  btnMyWorkMobile.addEventListener('click', function() {
      const target = document.getElementById('explore-redirect-link');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

const btnViewWork = document.getElementById('view-work');
if (btnViewWork) {
  btnViewWork.addEventListener('click', function() {
      const target = document.getElementById('explore-redirect-link');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

const btnTouch = document.getElementById('touch');
if (btnTouch) {
  btnTouch.addEventListener('click', function() {
      const target = document.getElementById('social-links');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}


// window.addEventListener('load', function() {
// document.querySelector('.nav-load-animation').classList.add('visible-2');
// });

window.addEventListener('load', function() {
  const heroLeft = document.querySelector('.hero-left');
  if (heroLeft) heroLeft.classList.add('visible');
  const heroRight = document.querySelector('.hero-right');
  if (heroRight) heroRight.classList.add('visible');
  const introLeft = document.querySelector('.intro-to-left');
  if (introLeft) introLeft.classList.add('visible');
  const introRight = document.querySelector('.intro-img-right');
  if (introRight) introRight.classList.add('visible');
});

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);


  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailInput = document.getElementById('emailInput');
      const userEmail = emailInput ? emailInput.value : '';
      const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com&su=New%20Submission&body=Email%20From:%20${encodeURIComponent(userEmail)}`;
      window.open(mailToLink, '_blank');
      emailForm.reset();
    });
  }