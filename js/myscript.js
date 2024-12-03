$(function() {		//Loads Jscript when the page is fully loaded and prevent the vars from becoming global vars

  "use strict";		//Tells JScript to be careful when working , good practice to use it

  var topoffset = 50; //variable for menu height
  var slideqty = $('#home .item').length;
  var wheight = $(window).height(); //get the height of the window
  $('.fullheight').css('height', wheight); //set to window tallness 
  
  //replace IMG inside carousels with a background image
  $('#home .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });
  
  //Load with fade in transition
  
  $(document).ready(function() {
        $("body").css("display", "none");
        $("body").fadeIn(2500);
});

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#home') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#home') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Carousel Indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#home" data-slide-to="' + i + '"></li>';
    $('#home ol').append(insertText);
  }

});