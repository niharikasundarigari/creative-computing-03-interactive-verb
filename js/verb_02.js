/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}

function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


var shape1 = document.querySelector(".shape1");


var shape2 = document.querySelector(".shape2");

var R1= randomNumber(150,500);
var R2= randomNumber(150,600);

shape1.style.width = R1 + "px";
shape1.style.height = R1 + "px";

shape2.style.width = R2 + "px";
shape2.style.height = R2 + "px";

var h1 = randomNumber(0, 359);

shape1.style.background = hslColor(h1, 50, 50);
shape1.style.borderColor = hslColor(h1, 90, 50);

var h2 = randomNumber(0, 359);

shape2.style.background = hslColor(h2, 50, 50);
shape2.style.borderColor = hslColor(h2, 90, 50);

var container = document.querySelector(".content");


var h3 = randomNumber(0, 359);

container.style.background = hslColor(h3, 50, 70);




