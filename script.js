	$(document).ready(function() {
		
	let score = 0;
	
	
	$(".anwser").click(function() {
		console.log("anwser");
		$(this).css("background-color", "lightgreen");
		score += 1;
		console.log(score);
	});
	
	$(".wrong_anwser").click(function() {
		console.log("wrong");
		$(this).css("background-color", "tomato");
		score -= 1;
		console.log(score);
	});

	$("#next_button").click(function() {
		console.log("next questions");
	});
	
});
