var _ = require("lodash");
var array = [1,2,3,4,5,6,7,8,9];
console.log('answer:',_.without(array,3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var text1 = document.getElementById("textcolor");
var tcolor = document.getElementById("tcolor"); 
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setTextColor(){
	text1.style.color = color3.value;
	tcolor.textContent= "value="+color3.value;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setTextColor);