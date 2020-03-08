/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
$(document).foundation()

$(document).ready(function(){
  $('img').parent('a').addClass('contains-image');
});

$(document).scroll(function() {

  var y = $(this).scrollTop();
  if (y > 500 && window.matchMedia("(min-width: 600px)").matches) {

    $('#cta').fadeIn();

  // } else {
  //   $('#cta').fadeOut();
  }

});