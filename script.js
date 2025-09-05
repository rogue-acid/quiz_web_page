	$(document).ready(function() {
		
	$(".anwser").click(function() {
		console.log("anwser");
		$(this).css("background-color", "lightgreen");
	});
	
	$(".wrong_anwser").click(function() {
		console.log("wrong");
		$(this).css("background-color", "tomato");
	});

	$(".next_button").click(function() {
		console.log("next questions");
	});
	
	$("p").hover(function(){
		$(this).css("background-color", "yellow");
	}, function(){
		$(this).css("background-color", "white");
	});

});
