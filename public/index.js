//when window first loads, set each navbar component to have a different color

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = $("#desktopNav");
var navbarM = $("#mobileNav");
var landing = $(".j1");
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= landing.outerHeight(true)) {
    navbar.addClass("sticky");

  } else {
    navbar.removeClass("sticky");
  }
  
}
    
$('body').scrollspy({ target: '#desktopNav', offset: 100})

//smooth scrolling:
$("#about").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#about2").offset().top - navbar.height()
    }, 'slow');
    
});

$("#aboutM").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#about2").offset().top - 76
    }, 'slow');
    
});

$("#work").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#work2").offset().top - navbar.height() 
    },'slow');
});

$("#workM").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#work2").offset().top - 76
    }, 'slow');
    
});

$("#resume").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#resume2").offset().top - navbar.height()
    },'slow');
});

$("#resumeM").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#resume2").offset().top - 76
    }, 'slow');
    
});

$("#contact").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#contact2").offset().top - navbar.height()
    },'slow');
});

$("#contactM").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $("#contact2").offset().top - 76
    }, 'slow');
    
});

$("#name").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $(".j1").offset().top - navbar.height() 
    },'slow');
});

$("#nameM").click(function() {
    navbar.addClass("sticky");
    $('html,body').animate({
        scrollTop: $(".j1").offset().top - 76
    }, 'slow');
    
});



//toggle sections:
$("#sh1").click(function(){
    $("#bt0").fadeToggle();
	$("#bt1").fadeToggle();
	$("#sh1").toggleClass("closed");
})

$("#sh2").click(function(){
	$("#bt2").fadeToggle();
	$("#sh2").toggleClass("closed");
})

$("#sh3").click(function(){
	$("#bt3").fadeToggle();
	$("#sh3").toggleClass("closed");
})

$("#sh4").click(function(){
	$("#mocoin").fadeToggle();
	$("#sh4").toggleClass("closed");
})


$("#sh5").click(function(){
	$("#unclesam").fadeToggle();
	$("#sh5").toggleClass("closed");
})

$("#sh7").click(function(){
	$("#bt7").fadeToggle();
	$("#sh7").toggleClass("closed");
})