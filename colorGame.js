// Create and set variables
var colors = [];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var correctColorDisplay = document.querySelector("#correctColorDisplay");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#resetButton");
var hardModeButton = document.querySelector("#hardModeButton");
var easyModeButton = document.querySelector("#easyModeButton");
var correctColor;
var easyMode = 3;
var hardMode = 6;
var mode = hardMode;


// Define functions
// generate a random between 1 and 255
function random255(){
	return Math.floor(Math.random() * 255) + 1;
};

// generate a random color
function pickColor(){
	var r = random255();
	var g = random255();
	var b = random255();
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
};

// select the correct color to pick
function pickThisColor(){
	var i = Math.floor(Math.random() * mode) + 1;
	return squares[i].style.backgroundColor;
};

// paint squares
function paintSquares(){
	for (var i = 0; i < squares.length; i++){
		if (i < mode){
			squares[i].style.backgroundColor = colors[i] = pickColor();
		} else {
			squares[i].style.backgroundColor = colors[i] = "#232323";
		}
	};
};

paintSquares();

correctColor = correctColorDisplay.textContent = pickThisColor();

// Display the RGB of the color to pick

for (var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === correctColor){
			message.textContent = "Correct!";
			for (var k = 0; k < squares.length; k++){
				squares[k].style.backgroundColor = correctColor;
			};
		
		} else {
			this.style.background = "#232323";
			message.textContent = "Try again!";
		}
	});
};


resetButton.addEventListener("click", function(){
	paintSquares();
	// for (var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i] = pickColor();
	// };

	correctColor = correctColorDisplay.textContent = pickThisColor();

	for (var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === correctColor){
			message.textContent = "Correct!";
			for (var k = 0; k < squares.length; k++){
				squares[k].style.backgroundColor = correctColor;
			};
		
		} else {
			this.style.background = "#232323";
			message.textContent = "Try again!";
		}
		});
	};
});

hardModeButton.addEventListener("click", function(){
	mode = hardMode;
});

easyModeButton.addEventListener("click", function(){
	mode = easyMode;
});

