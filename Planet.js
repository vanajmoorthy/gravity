class Planet {
	constructor(mass, [x, y, z], [v1, v2, v3]) {
		this.mass = mass;
		this.radius = Math.pow(mass, 0.5);
		this.pos = new p5.Vector(x, y, z);
		this.velocity = new p5.Vector(v1, v2, v3);
	}
}
