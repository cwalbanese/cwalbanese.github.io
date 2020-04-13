const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const navLinks = document.querySelector('.navLink');
const header = document.querySelector('.box-wrapper');

toggleMenu = () => {
  if (nav.style.height != '360px') {
    nav.style.height = '360px';
    setTimeout(function () {
      navLinks.style.visibility = 'visible';
    }, 600);
  } else {
    navLinks.style.visibility = 'hidden';
    nav.style.height = '50px';
  }
};

menuButton.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);

setTimeout(function () {
  header.classList.remove('loading');
}, 600);
