const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const navLinks = document.querySelector('.navLink');
const header = document.querySelector('.box-wrapper');

toggleMenu = () => {
  if (nav.style.height != '420px') {
    nav.style.height = '420px';
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

elements = document.querySelectorAll('.hidden');
windowHeight = window.innerHeight;

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('projects-animation');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

checkPosition();
