class Walker {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();

    this.prev = this.position.copy();
  }

  walk() {
    this.prev.set(this.position);

    this.velocity = p5.Vector.random2D();
    if (0.5 > random(100)) {
      this.velocity.mult(random(25, 80));
    } else {
      this.velocity.mult(random(3));
    }

    this.position.add(this.velocity);
  }

  show() {
    stroke(255, 150);
    stroke(255);
    strokeWeight(2);

    const { x, y } = this.position;

    line(x, y, this.prev.x, this.prev.y);
    point(x, y);
  }
}
