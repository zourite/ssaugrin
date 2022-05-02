var header = document.getElementById('header');
var menuItems = document.querySelectorAll('.nav-link');
var current = location.pathname.split('/')[1];
const hamburger = document.getElementById('hambtn');
const menu = document.getElementById('menu-top');
const homeLink = document.getElementById('home-link');

hljs.initHighlightingOnLoad();

(function () {

  initElement()
  menuToggle()

})();

function initElement()
{

  if (current === "") {

    homeLink.classList.add('active');

  } else {
  
    for (var i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].classList.add('active');
      }
    }

  }
  

};

function menuToggle() {

  hamburger.addEventListener('click', event => {

    hamburger.classList.toggle('active')

    if(menu.classList.contains('slide-in')) {

      menu.classList.add('slide-out')
      menu.classList.remove('slide-in');

    } else {

      menu.classList.remove('slide-out')
      menu.classList.add('slide-in');

    }
    
    document.body.classList.toggle('no-scroll');
  });

}
