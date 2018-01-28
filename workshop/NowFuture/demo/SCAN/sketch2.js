var txt;

// Blinking dots background density
var step = 50;

// StrokeWeight
var w = 3;

// Dots base alpha
var apha = 16;

// Scanline position
var pos = 200;

// Scanline speed
var speed = 20;

// Scanline left and right coordinates
var x1;
var x2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 64);

  // Blinking dot background
  for (var x = step / 2; x < width; x = x + step) {
    for (var y = step / 2; y < height; y = y + step) {
      push();
      translate(x, y);
      drawDot();
      pop();
    }
  }

  // Hand image
  if (frameCount < 320) {
    strokeWeight(3);
    txt = "Scan in progress&hellip;"
  } else {
    strokeWeight(0);
    txt = "Scan complete"
  }

  document.getElementById("child").innerHTML = txt;

  // Scanline
  x1 = 100;
  x2 = width - 100;
  pos = pos + speed;

  if (pos > height - 100) {
    speed = -speed;
  }

  if (pos < 200) {
    speed = -speed;
  }

  stroke(255);
  line(x1, pos, x2, pos);
}

// Blinking dot function
function drawDot() {
  if (random(1) > 0.99) {
    apha = 100;
    weight = w * 1.5;
  } else {
    apha = 16;
    weight = w;
  }

  strokeWeight(weight);
  stroke(255, apha);
  point(0, 0);
}