$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.carousel').carousel();
})

$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.nav-bar').addClass('show-background');
    } else {
        $('.nav-bar').removeClass('show-background');
    }
});


