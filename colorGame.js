//colorGame.js
// var colour = [
// 	"rgb(255 ,0 ,0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)", //spaces are important
// 	"rgb(255, 0, 255)"
// ];
var numColor = 6;
var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var reset = document.getElementById("reset");
var color = generateColor(numColor);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var pickedColor = pickColor();
var display = document.getElementById("colorDisplay");
display.textContent = pickedColor;
for (var i = 0; i < color.length; i++) {
	squares[i].style.backgroundColor = color[i];
	//add click listeners
	squares[i].addEventListener("click", function() {
		var clickedcolor = this.style.backgroundColor;
		if (clickedcolor === pickedColor)

		{
			message.textContent = "Correct !";
			reset.textContent = "Play Again !";
			h1.style.backgroundColor = pickedColor;
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}

	});
}

function changeColors(colour) {
	for (var i = 0; i < color.length; i++) {
		squares[i].style.backgroundColor = colour;
	}


}

function pickColor() {
	return color[Math.floor(Math.random() * color.length)];
}

function generateColor(num) {
	//make an array add colors to array
	//return that array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = randomColor();
	}
	return arr;
}


function randomColor() {
	var r = Math.floor(Math.random() * 255 + 1);

	var g = Math.floor(Math.random() * 255 + 1);

	var b = Math.floor(Math.random() * 255 + 1);
	return "rgb(" + r + ', ' + g + ', ' + b + ")";
}

reset.addEventListener("click", function() {
	color = generateColor(numColor);
	pickedColor = pickColor();
	display.textContent = pickedColor;
	message.textContent = "";
	for (var i = 0; i < color.length; i++) {
		squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
});

easybtn.addEventListener("click", function() {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numColor = 3;
	color = generateColor(numColor);
	pickedColor = pickColor();
	display.textContent = pickedColor;
	message.textContent = "";
	for (var i = 0; i < color.length; i++) {
		squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
	for (var i = 3; i < 6; i++) {
		squares[i].style.backgroundColor = "#232323";
	}


});

hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numColor = 6;
	color = generateColor(numColor);
	pickedColor = pickColor();
	display.textContent = pickedColor;
	message.textContent = "";
	for (var i = 0; i < color.length; i++) {
		squares[i].style.backgroundColor = color[i];
	}


});