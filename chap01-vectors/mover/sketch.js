let mover;

function setup() {
  createCanvas(600, 600);
  mover = new Mover(300, 300);
}

function draw() {
  background(0);
  
  mover.update();
  mover.show();
}
