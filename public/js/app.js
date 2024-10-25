(() => {
  // assets/js/componnents/menu.js
  var menuItems = document.querySelectorAll(".nav-link");
  var current = location.pathname.split("/")[1];
  var hamburger = document.getElementById("hambtn");
  var menu = document.getElementById("menu-top");
  var homeLink = document.getElementById("home-link");
  var toggleMenu = () => {
    const { classList: hamburgerClass } = hamburger;
    const { classList: menuClass } = menu;
    const { classList: bodyClass } = document.body;
    hamburgerClass.toggle("active");
    if (menuClass.contains("slide-in")) {
      menuClass.add("slide-out");
      menuClass.remove("slide-in");
    } else {
      menuClass.remove("slide-out");
      menuClass.add("slide-in");
    }
    bodyClass.toggle("no-scroll");
  };
  hamburger.addEventListener("click", toggleMenu);
  var setActiveLink = () => {
    if (current === "") {
      homeLink.classList.add("active");
      return;
    }
    Array.from(menuItems).forEach((item) => {
      if (item.getAttribute("href").includes(current)) {
        item.classList.add("active");
      }
    });
  };
  (() => {
    setActiveLink();
  })();
})();
