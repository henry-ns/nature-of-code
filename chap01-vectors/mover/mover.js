class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
  }

  update() {
    const mouse = createVector(mouseX, mouseY);

    const acceleration = p5.Vector.sub(mouse, this.position);
    acceleration.setMag(2);

    this.velocity.add(acceleration);
    this.velocity.limit(25);

    this.position.add(this.velocity);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);

    const { x, y } = this.position;

    fill(255, 100);
    ellipse(x, y, 32);
  }
}
