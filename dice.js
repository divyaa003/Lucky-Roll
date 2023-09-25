document.getElementsByClassName("play-button")[0].addEventListener('click',play);

function play(event) {

	event.preventDefault();

	var randomNumber1 = Math.floor(Math.random() * 6) + 1;

	var randomImageSource = "Dice " + randomNumber1 + ".png";

	var image1 = document.querySelectorAll("img")[0];

	image1.setAttribute("src", randomImageSource);


	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	var randomImageSource2 = "Dice " + randomNumber2 + ".png";

	var image2 = document.querySelectorAll("img")[1];

	image2.setAttribute("src", randomImageSource2);

	
	if (randomNumber1 < randomNumber2) {
		document.getElementById("result").innerHTML = "Player 2 Wins!";
	} 
	else if (randomNumber1 > randomNumber2) {
		document.getElementById("result").innerHTML = "Player 1 Wins!";
	} 
	else {
		document.getElementById("result").innerHTML = "Draw!";
	}
	document.getElementById("result").classList.remove("hidden");
}

