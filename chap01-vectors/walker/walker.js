class Walker {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
  }

  update() {
    this.position.add(this.velocity);

    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(5, 10));
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);

    const {x, y} = this.position;

    fill(255, 100);
    ellipse(x, y, 32);
  }
}