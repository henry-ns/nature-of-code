let walker;

function setup() {
  createCanvas(600, 600);
  walker = new Walker(0, 0);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  
  walker.walk();
  walker.show();
}
