/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
$(document).foundation()
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350) {
    $('#cta').fadeIn();
  // } else {
  //   $('#cta').fadeOut();
  }
});