var header = document.getElementById('header');
var flipbox = document.getElementById('flipbox');
var p = document.getElementById("flip");
var homeLink = document.getElementById("home-link");
var closeflip = document.getElementById('close-flip');

hljs.initHighlightingOnLoad();

if( window.location.hash == "#contact") { 
    flipbox.classList.add("rotate");
}

(function () {

    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('.nav-link');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].classList.add('active');
        }
    }
})();

function initElement()
{
 
    if ( window.location.pathname == '/'){
       
        p.onclick = showFlip;
        closeflip.onclcick = closeContactBox;
        
        if(window.location.hash != "#contact") {
            homeLink.classList.add("active");       
        } else {
            flip.classList.add("active");
        }

    }

    animatElements()
    
    
};

function showFlip(e)
{
    e.preventDefault(); 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    flipbox.classList.add("rotate");
    flip.classList.add("active");
    homeLink.classList.remove("active");
   
}

function closeContactBox()
{
  homeLink.classList.add("active");
  flip.classList.remove("active");
  flipbox.classList.remove("rotate");
}

function animatElements(){

    var sandwiches = document.querySelectorAll('.anihome');
   
    sandwiches.forEach(function (sandwich, index) {

        setTimeout(function() {

            sandwich.classList.add('animate__animated', 'animate__fadeIn');
            sandwich.classList.remove("hidden");
        }, 200 * index);
       
    });
    

    var sandwiches = document.querySelectorAll('.anihome2');
   
    sandwiches.forEach(function (sandwich, index) {

        setTimeout(function() {

            
            sandwich.classList.add('md:flex','animate__animated', 'animate__slideInDown');
            sandwich.classList.remove("hidden");
            
        }, 1600);
       
    });
}

