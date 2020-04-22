const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const navLinks = document.querySelector('.navLink');
const header = document.querySelector('.box-wrapper');

toggleMenu = () => {
  if (nav.style.height != '420px') {
    nav.style.height = '420px';
    menuButton.src = 'images/close.svg';
    menuButton.style.margin = '10px -5px -5px 55px';
    setTimeout(function () {
      navLinks.style.visibility = 'visible';
    }, 600);
  } else {
    menuButton.src = 'images/menu.svg';
    navLinks.style.visibility = 'hidden';
    nav.style.height = '50px';
    menuButton.style.margin = '0px 0px 0px 50px';
  }
};

menuButton.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);

setTimeout(function () {
  header.classList.remove('loading');
}, 600);

elements = document.querySelectorAll('.hidden');
windowHeight = window.innerHeight;

function checkProjects() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('projects-animation');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkProjects);

skills = document.querySelectorAll('.off');

function checkSkills() {
  for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    let positionFromTop = skills[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      skill.classList.add('skills-animation');
      skill.classList.remove('off');
    }
  }
}

window.addEventListener('scroll', checkSkills);

skillsLoaded = document.getElementById('skills');
skillsLoaded.addEventListener('mouseout', checkLoaded);

function checkLoaded(evt) {
  evt.target.classList.remove('skills-animation');
  evt.target.classList.add('loaded');
}

checkProjects();
checkSkills();
