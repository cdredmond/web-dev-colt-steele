var p1button = document.querySelector("#p1button");
var p1scoreDisplay = document.querySelector("#p1scoreDisplay");
var p2button = document.querySelector("#p2button");
var p2scoreDisplay = document.querySelector("#p2scoreDisplay");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var resetButton = document.querySelector("#resetButton");

var p1score = 0;
var p2score = 0;
var winningScore = 5;
var gameOver = false;

function reset(){
	p1score = 0;
	p2score = 0;
	winningScore = 5;
	gameOver = false;
	p1scoreDisplay.textContent = p1score;
	p2scoreDisplay.textContent = p2score;
	numInput.text = "";
	p1scoreDisplay.classList.remove("winner")
	p2scoreDisplay.classList.remove("winner")
};

p1button.addEventListener("click", function(){
	if (!gameOver){
		p1score++;
		p1scoreDisplay.textContent = p1score;
		if (p1score === winningScore){
			gameOver = true;
			p1scoreDisplay.classList.add("winner")
		}
	};	
});

p2button.addEventListener("click", function(){
	if (!gameOver){
		p2score++;
		p2scoreDisplay.textContent = p2score;
		if (p2score === winningScore){
			gameOver = true;
			p2scoreDisplay.classList.add("winner")
		}
	};	
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
});

resetButton.addEventListener("click", function(){
	reset();
	// p1score = 0;
	// p2score = 0;
	// winningScore = 5;
	// gameOver = false;
});
