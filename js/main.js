
$(".nav-link").on("click", function(){
	var el = $(this).siblings(".hand");
	
	el.removeClass("animateScratch");
	el.addClass("animateScratch");
	
	//delay the link so the animation can run//
	var em = $("#smell-line");
	em.removeClass("animateSniff");
	em.addClass("animateSniff");


	setTimeout(function() {
		$("#brain").attr("src", "images/Brain/Pink-Brain.jpg");
	}, 1400);

	setTimeout(function() {
		$("#brain").attr("src", "images/Brain/brain-white.png");
	}, 3000);

	setTimeout(function(){
		em.removeClass("animateSniff");
	}, 3000);
	

 	var href = $("a", this).attr('href');
	/*adding -200 after top was a super easy fix to the fixed header scroll problem!*/
	setTimeout(function() {
		$('html, body').animate({scrollTop:$(href).position().top-275}, 'slow');
		el.removeClass("animateScratch");
	}, 1500);
    
    return false;
  
});


//When scroll reaches #about author, replace proust with Virginia's image*/
function proustPic(){
	$("#proust").addClass("show");
}

window.addEventListener("load", proustPic, false);

window.onscroll = function() {authorPhoto()};
function authorPhoto() {
   	 if (document.body.scrollTop < 1181) {
    	$("#proust").addClass("show");
        $("#barry").removeClass("show");
       
    }

    if (document.body.scrollTop > 1181) {
    	$("#proust").removeClass("show");
        $("#barry").addClass("show");
        $("#hancock").removeClass("show");
    
    }

    if (document.body.scrollTop > 2046) {
        $("#barry").removeClass("show");
        $("#hancock").addClass("show");
        $("#neuron").removeClass("show");
      
    }


    if (document.body.scrollTop > 3049) {
        $("#barry").removeClass("show");
        $("#hancock").removeClass("show");
        $("#neuron").addClass("show");
       
    }

    //added nav bar to the scroll function
    if ($(window).width() > 800) {
	    if (document.body.scrollTop > 380){
			$("nav").addClass("nav-fixed");
		}
	}
	if (document.body.scrollTop < 380){
		$("nav").removeClass("nav-fixed");
	}

	 if ($(window).width() < 800) {
	 	$("nav").removeClass("nav-fixed");
	 }

};



$("#hamburger").on("click", function(){
	$(".nav-column").css("display", "inline-block");
	$("#mobile-paypal").css("display", "inline-block");
});


$(".mobile-nav-link").on("click", function(){
	$(".nav-column").css("display", "none");
	$("#mobile-paypal").css("display", "none");

});

if ($(window).width() > 800) {
	$(".nav-column").css("display", "inline-block");
	$("#mobile-paypal").css("display", "none");
	};
