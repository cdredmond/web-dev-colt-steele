var button = document.querySelector("button");
var body = document.querySelector("body");
var isGreen = true;

button.addEventListener("click", function() {
if(isGreen) {
    body.style.background = "green";
}else {
    body.style.background = "white";
}
isGreen = !isGreen;
});