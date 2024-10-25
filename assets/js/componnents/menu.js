const menuItems = document.querySelectorAll('.nav-link');
const current = location.pathname.split('/')[1];
const hamburger = document.getElementById('hambtn');
const menu = document.getElementById('menu-top');
const homeLink = document.getElementById('home-link');

const toggleMenu = () => {
  const {classList: hamburgerClass} = hamburger;
  const {classList: menuClass} = menu;
  const {classList: bodyClass} = document.body;

  hamburgerClass.toggle('active');

  if (menuClass.contains('slide-in')) {
    menuClass.add('slide-out');
    menuClass.remove('slide-in');
  } else {
    menuClass.remove('slide-out');
    menuClass.add('slide-in');
  }

  bodyClass.toggle('no-scroll');
};

hamburger.addEventListener('click', toggleMenu);

const setActiveLink = () => {
  if (current === "") {
    homeLink.classList.add('active');
    return;
  }

  Array.from(menuItems)
    .forEach(item => {
      if (item.getAttribute("href").includes(current)) {
        item.classList.add('active');
      }
    });
};

(() => {
  setActiveLink();
})();
