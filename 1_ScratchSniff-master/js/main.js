//all in two seconds//

$(".nav-link").on("click", function(){
	var el = $(this).siblings(".hand"); 
	var newone = el.clone(true);
	 el.before(newone); 
     el.remove();
 });
  	
       //after clicking the link, trigger keyframe which moves hand up and then back and forth to imitate scratching.//



 //delay removing the class so the link is clickable again. I'm not sure how this code works.



$(".nav-link").on("click", function(){


	$(".brain-nose").css("display", "inline-block");
	$("nav").css("background", "white");
	
	$(this).siblings(".hand").removeClass("animateScratch");
	$(this).siblings(".hand").addClass("animateScratch");
	
	//this works with .nav-link but not nav-link a//
	//delay the link so the animation can run//
	
	$(this).siblings(".smell-line").removeClass("animateSniff");
	$(this).siblings(".smell-line").addClass("animateSniff");
	


 	var href = $("a", this).attr('href');
	setTimeout(function() {
		$('html, body').animate({scrollTop:$(href).position().top}, 'slow');
	}, 1500);
       return false;
    


  
});







//smell line goes up into nose//


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
    }

    else if (document.body.scrollTop > 1000) {
    	$("#proust").removeClass("show");
        $("#barry").addClass("show");
    }

};

/*can't get this to work, so I'll sue fixed for now.
$("#right-side-bar").scroll(function(){
	$(this).css('top', $(this).scrollTop());
});
*/