(() => {
  // assets/js/componnents/menu.js
  var menuItems = document.querySelectorAll(".nav-link");
  var current = location.pathname.split("/")[1];
  var mainMenu = document.getElementById("main-menu");
  var hamburger = document.getElementById("btn-burger");
  var menu = document.getElementById("top-links");
  var homeLink = document.getElementById("home-link");
  var toggleMenu = () => {
    const { classList: hamburgerClass } = hamburger;
    const { classList: menuClass } = menu;
    const { classList: bodyClass } = document.body;
    const { classList: mainMenuClass } = mainMenu;
    hamburgerClass.toggle("active");
    if (menuClass.contains("slide-in")) {
      menuClass.add("slide-out");
      menuClass.remove("slide-in");
    } else {
      menuClass.remove("slide-out");
      menuClass.add("slide-in");
    }
    mainMenuClass.toggle("menu-open");
    bodyClass.toggle("no-scroll");
  };
  hamburger.addEventListener("click", toggleMenu);
  var setActiveLink = () => {
    if (!current) {
      homeLink.parentElement.classList.add("active");
      return;
    }
    Array.from(menuItems).forEach((item) => {
      if (item.getAttribute("href").includes(current)) {
        item.parentElement.classList.add("active");
      }
    });
  };
  (() => {
    setActiveLink();
  })();
})();
