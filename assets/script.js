document.getElementById('my-work').addEventListener('click', function() {
    document.getElementById('explore-redirect-link').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('my-work-mobile').addEventListener('click', function() {
    document.getElementById('explore-redirect-link').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('view-work').addEventListener('click', function() {
    document.getElementById('explore-redirect-link').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('touch').addEventListener('click', function() {
    document.getElementById('social-links').scrollIntoView({
        behavior: 'smooth'
    });
});


// window.addEventListener('load', function() {
// document.querySelector('.nav-load-animation').classList.add('visible-2');
// });

window.addEventListener('load', function() {
  document.querySelector('.hero-left').classList.add('visible');
});
window.addEventListener('load', function() {
  document.querySelector('.hero-right').classList.add('visible');
});
window.addEventListener('load', function() {
  document.querySelector('.intro-to-left').classList.add('visible');
});
window.addEventListener('load', function() {
  document.querySelector('.intro-img-right').classList.add('visible');
});

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);


  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const userEmail = document.getElementById('emailInput').value;
    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=singhgagan40951@gmail.com&su=New%20Submission&body=Email%20From:%20${userEmail}`;

    // Open Gmail compose page in a new tab
    window.open(mailToLink, '_blank');
    
    // Clear the input field
    document.getElementById('emailForm').reset();
  });