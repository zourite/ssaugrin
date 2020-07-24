var header = document.getElementById('header');
var flipbox = document.getElementById('flipbox');
var p = document.getElementById("flip");
var homeLink = document.getElementById("home-link");
var closeflip = document.getElementById('close-flip');

resizeOnScreen()

function resizeOnScreen(){

    if (window.matchMedia("(max-width: 640px)").matches) {
        resizeFlipbox("h-front");
        }

}

window.addEventListener('resize', function(e) {

    resizeOnScreen()
});

if( window.location.hash == "#flip") { 
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

function resizeFlipbox(face) {

    var offsetHeight = document.getElementById(face).offsetHeight;
    document.getElementById("flipbox").setAttribute("style","height:"+offsetHeight+"px");

}

function initElement()
{

    if ( window.location.pathname == '/'){
       
        p.onclick = showFlip;
        closeflip.onclcick = closeContactBox;
        
        if(window.location.hash != "#flip") {
            homeLink.classList.add("active");       
        } else {
            flip.classList.add("active");
        }

    }
    
    
};

function showFlip(e)
{
    e.preventDefault(); 
    if (window.matchMedia("(max-width: 640px)").matches) {
    resizeFlipbox("h-back");
    }
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

