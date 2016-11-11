//all in two seconds//
//after clicking the link, trigger keyframe which moves hand up and then back and forth to imitate scratching.//


 //delay removing the class so the link is clickable again. I'm not sure how this code works.
$(".nav-link").on("click", function(){
	var el     = $(this).siblings(".hand"),  
		     newone = el.clone(true);
		           
		 el.before(newone);
	        
	 $(el).remove();
});


$(".nav-link").on("click", function(){
	

	$(this).siblings(".hand").removeClass("animate");
	$(this).siblings(".hand").addClass("animate");
	//this works with .nav-link but not nav-link a//
	//delay the link so the animation can run//
 	var href = $("a", this).attr('href');
	setTimeout(function() {window.location = href}, 2000);
       return false;

      
});




//smell line goes up into nose//


//brain lights up//
//user is brought to that section of the page//


//js on load, brains flash colors



//When scroll reaches #about author, replace proust with Virginia's image*/

window.onscroll = function() {authorPhoto()};
function authorPhoto() {
    if (document.body.scrollTop > 500) {
    	$("img#proust").toggleClass("hidden");
        $("img#barry").toggleClass("show");
    }

};


$("#first-brain").on({'click':function(){
	$('#first-brain').attr('src', 'images/Brain/brain-red.png')
	}
});

$("#second-brain").on({'click':function(){
	$('#second-brain').attr('src', 'images/Brain/brain-yellow.png')
	}
});

$("#third-brain").on({'click':function(){
	$('#third-brain').attr('src', 'images/Brain/brain-green.png')
	}
});

$("#fourth-brain").on({'click':function(){
	$('#fourth-brain').attr('src', 'images/Brain/brain-blue.png')
	}
});

$("#last-brain").on({'click':function(){
	$('#last-brain').attr('src', 'images/Brain/brain-purple.png')
	}
});

/*can't get this to work, so I'll sue fixed for now.
$("#right-side-bar").scroll(function(){
	$(this).css('top', $(this).scrollTop());
});
*/