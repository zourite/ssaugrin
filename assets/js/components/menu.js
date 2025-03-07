const menuItems = document.querySelectorAll('.nav-link');
const current = location.pathname.split("/").filter(Boolean)[0] || "";
const mainMenu = document.getElementById('main-menu');
const hamburger = document.getElementById('btn-burger');
const menu = document.getElementById('top-links');
const homeLink = document.getElementById('home-link');

const toggleMenu = () => {
  const {classList: hamburgerClass} = hamburger;
  const {classList: menuClass} = menu;
  const {classList: bodyClass} = document.body;
  const {classList: mainMenuClass} = mainMenu;

  hamburgerClass.toggle('active');

  if (menuClass.contains('slide-in')) {
    menuClass.add('slide-out');
    menuClass.remove('slide-in');
  } else {
    menuClass.remove('slide-out');
    menuClass.add('slide-in');
  }

  mainMenuClass.toggle('menu-open');
  bodyClass.toggle('no-scroll');
};

hamburger.addEventListener('click', toggleMenu);

const setActiveLink = () => {
  if (!current && homeLink?.parentElement) {
    homeLink.parentElement.classList.add('active');
    return;
  }

  Array.from(menuItems)
    .forEach(item => {
      const href = item.getAttribute("href");
      if (href && href.split("/").filter(Boolean)[0] === current) {
        item.parentElement.classList.add('active');
      }
    });
};

(() => {
  setActiveLink();
})();
