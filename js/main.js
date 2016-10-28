//js on load, brains flash colors

//$(document).ready(function() {})

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