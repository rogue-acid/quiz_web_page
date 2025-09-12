$(document).ready(function() {
	let score = 0;
	let clicked = false;
	score = +(sessionStorage.score)
	$("#score").text("score: " + score + "/8");
		
	$("#start").click(function() {
		console.log("test");
		sessionStorage.score = 0;
	});
	
	$(".answer").click(function() {
		console.log("answer");
		$(this).css("background-color", "lightgreen");
		
		if (clicked == false) {
			score += 1;
			sessionStorage.score = score;
			$("#score").text("score: " + score + "/8");
			console.log(score);
			clicked = true;
		}
	});
	
	$(".wrong_answer").click(function() {
		clicked = true;
		console.log("wrong");
		$(this).css("background-color", "tomato");
	});

	$("#next_button").click(function() {
		console.log("next questions");
	});
	
});
