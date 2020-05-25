let mover;
let attractor

function setup() {
  createCanvas(600, 600);
  mover = new Mover(100, 100, 50);
  attractor = new Attractor(300, 300, 50);
  background(0);
}

function draw() {
  background(0, 5);
  
  mover.update();
  mover.show();

  attractor.attract(mover);
  attractor.show();
}
