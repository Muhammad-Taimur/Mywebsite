
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);
    
        
//        for logo
      
      (function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".disapper1").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('.disapper1').fadeIn(500);
			} else {
				$('.disapper1').fadeOut(500);
			}
		});

	
	});

});
    }(jQuery));
        
        
//        for menu-bar
        (function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$("#menu-toggle").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('#menu-toggle').fadeIn(500);
			} else {
				$('#menu-toggle').fadeOut(500);
			}
		});

	
	});

});
  }(jQuery));
        
//        this is fo rmain heading navbar
        (function ($) {
  $(document).ready(function(){
    
//	 hide .navbar first
	$("h1").hide();
	
	// fade in .navbar
	$(function () {
		$(window).load(function () {
            // set distance user needs to scroll before we fadeIn navbar
			
				$('h1').fadeIn(3000);
			
		});

	
	});

});
  }(jQuery));
        //        this is for skills section 
        
              $(document).ready(function() {
$(window).scroll( function(){
$('.skillssec')  .each( function(i){
var bottom_of_element = $(this).offset().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();
if( bottom_of_window > bottom_of_element ){
$(this).animate({'opacity':'2'},2000);

}
}); 
});
});
        
//        this is for skills section 2
                $(document).ready(function() {
$(window).scroll( function(){
$('.skillssec2')  .each( function(i){
var bottom_of_element = $(this).offset().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();
if( bottom_of_window > bottom_of_element ){
$(this).animate({'opacity':'2'},2000);
}
}); 
});
});
//        this is for form
        
        $(document).ready(function() {
$(window).scroll( function(){
$('.form-control').each( function(i){
var bottom_of_element = $(this).offset().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();
if( bottom_of_window > bottom_of_element ){
$(this).animate({'opacity':'1'},1000);
}
}); 
});
});
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*!
 * Start Bootstrap - Freelancer v4.0.0-beta (http://startbootstrap.com/template-overviews/freelancer)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */
