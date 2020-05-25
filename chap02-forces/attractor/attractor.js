class Attractor {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.mass = mass;
    this.radius = sqrt(this.mass / PI) * 4;
  }

  attract(mover) {
    const force = p5.Vector.sub(this.position, mover.position);
    const distanceSq = constrain(force.magSq(), 50, 2000);

    const G = 5;
    const strength = G * (this.mass * mover.mass) / distanceSq;

    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    push();

    stroke(255);
    strokeWeight(2);

    const { x, y } = this.position;

    fill(255, 0, 100);
    ellipse(x, y, this.radius * 2);

    pop();
  }
}
