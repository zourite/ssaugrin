
var header = document.getElementById('header');
var flipbox = document.getElementById('flipbox');
var p = document.getElementById("flip");

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

function initElement()
{
    if ( window.location.pathname == '/' ){
        // Index (home) page
        
  var closeflip = document.getElementById('close-flip');

 
  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  p.onclick = showAlert;
  closeflip.onclcick = closeContactBox;

  
    
    } else {
        // Other page
        console.log(window.location.pathname);
    }  
  
};

function showAlert(e)
{
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    flipbox.classList.add("rotate");
}

function closeContactBox()
{
  flipbox.classList.remove("rotate");
}

