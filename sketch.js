function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let values = [
	randomIntFromInterval(150, 240),
	randomIntFromInterval(1, 8),
	randomIntFromInterval(-450, -350),
	randomIntFromInterval(-6, 0),
	randomIntFromInterval(-340, -240),
];

console.log(values);

let bigG = 5;

let planetHandler = new PlanetHandler(bigG, [
	// format: (mass, [posx,posy,posz], [velx,vely,velz])
	new Planet(1000, [0, 0, 0], [0, 0, 0]),
	new Planet(50, [values[0], 0, 0], [0, values[1], 0]),
	new Planet(50, [values[2], 0, 0], [0, values[3], 0]),
	new Planet(90, [0, 0, values[4]], [values[3], 0, 0]),
]);

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
}
function draw() {
	background(0);
	scale(1, -1);

	ambientLight(60, 60, 60);

	// LOGIC
	planetHandler.updateVelocity();
	planetHandler.updatePosition();

	// DRAWING
	fill(0, 224, 255);
	stroke(0);
	planetHandler.displayPlanets();
}
