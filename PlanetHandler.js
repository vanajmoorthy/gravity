class PlanetHandler {
	constructor(G, planetList) {
		this.G = G;
		this.planetList = planetList;
	}

	getAcceleration(pos1, pos2, m2) {
		let distance = p5.Vector.dist(pos1, pos2);
		let scalingFactor = (this.G * m2) / (distance * distance);
		let acc = p5.Vector.sub(pos2, pos1).normalize().mult(scalingFactor);

		return acc;
	}

	updatePosition() {
		for (let planet of this.planetList) {
			planet.pos.add(planet.velocity);
		}
	}
	updateVelocity() {
		for (let i of this.planetList) {
			for (let j of this.planetList) {
				// mass does not affect itself
				if (i != j) {
					let acceleration = this.getAcceleration(
						i.pos,
						j.pos,
						j.mass
					);

					i.velocity.add(acceleration);
				}
			}
		}
	}

	displayPlanets() {
		for (let planet of this.planetList) {
			let pos = planet.pos;
			translate(pos.x, pos.y, pos.z);
			push();
			normalMaterial();
			sphere(planet.radius);
			pop();
			translate(-pos.x, -pos.y, -pos.z);
		}
	}
}
