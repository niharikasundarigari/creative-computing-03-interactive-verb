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

var shape1 = document.querySelector(".shape1");

//var width= randomNumber(150,700);
//var height= randomNumber(150, 1000);

//shape1.style.width = width + "px";
//shape1.style.height = height + "px";


var h = randomNumber(0, 359);

shape1.style.background = hslColor(h, 50, 50);
shape1.style.borderColor = hslColor(h, 90, 50);

var container = document.querySelector(".content");

container.style.background = hslColor(h, 50, 70);




