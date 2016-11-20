



 //delay removing the class so the link is clickable again. I'm not sure how this code works.



$(".nav-link").on("click", function(){
	var el = $(this).siblings(".hand");
	
	el.removeClass("animateScratch");
	el.addClass("animateScratch");
	
	//this works with .nav-link but not nav-link a//
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
		$('html, body').animate({scrollTop:$(href).position().top-200}, 'slow');
		el.removeClass("animateScratch");
	}, 1500);
    
    return false;
  
});










//brain lights up//
//user is brought to that section of the page//


//js on load, brains flash colors



//When scroll reaches #about author, replace proust with Virginia's image*/
function proustPic(){
	$("#proust").addClass("show");
}

window.addEventListener("load", proustPic, false);

window.onscroll = function() {authorPhoto()};
function authorPhoto() {
   	 if (document.body.scrollTop < 1200) {
    	$("#proust").addClass("show");
        $("#barry").removeClass("show");
        $("#right-caption").html("Marcel Proust");
    }

    if (document.body.scrollTop > 1413) {
    	$("#proust").removeClass("show");
        $("#barry").addClass("show");
        $("#hancock").removeClass("show");
        $("#right-caption").html("Dr. Virginia Barry");
    }

    if (document.body.scrollTop > 2711) {
        $("#barry").removeClass("show");
        $("#hancock").addClass("show");
        $("#neuron").removeClass("show");
        $("#right-caption").html("Heather Hancock");
    }


    if (document.body.scrollTop > 3379) {
        $("#barry").removeClass("show");
        $("#hancock").removeClass("show");
        $("#neuron").addClass("show");
        $("#right-caption").html("Neuron Stained and Photographed by Dr. Justine Barry");
    }

    //added nav bar to the scroll function
    if (document.body.scrollTop > 380){
		$("nav").addClass("nav-fixed");
	}
	if (document.body.scrollTop < 380){
		$("nav").removeClass("nav-fixed");
	}

};

/*window.onscroll=  function() {
	if (document.body.scrollTop > 380){
		$("nav").addClass("nav-fixed");
	}
	if (document.body.scrollTop < 380){
		$("nav").removeClass("nav-fixed");
	}

};*/

/*can't get this to work, so I'll sue fixed for now.
$("#right-side-bar").scroll(function(){
	$(this).css('top', $(this).scrollTop());
});
*/