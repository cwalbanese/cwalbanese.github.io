const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const navLinks = document.querySelector('.navLink');

toggleMenu = () => {
  if (nav.style.height != '400px') {
    nav.style.height = '400px';
    nav.style.display = 'grid';
    navLinks.style.visibility = 'visible';
  } else {
    nav.style.height = '50px';
    navLinks.style.visibility = 'hidden';
  }
};

menuButton.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);
