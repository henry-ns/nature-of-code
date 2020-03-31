function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  const vetor = p5.Vector.random2D();
  vetor.mult(random(100, 200));

  strokeWeight(4);
  stroke(255, 50);

  line(0, 0, vetor.x, vetor.y);
}
