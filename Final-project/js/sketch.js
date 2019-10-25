let bg;
let y = 0;


function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  bg = loadImage('css/Images/SK-C-5.jpeg');
  canvas = createCanvas(1410, 1147.27);
  canvas.parent('canvas');
  
}

function draw() {
  background(bg);
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(237, 34, 93);
  }
  line(mouseX - 50, mouseY, mouseX + 50, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}

