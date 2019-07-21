class Animal {
	constructor(name) {
		this.name = name;
	}

	sayMyName() {
		console.log('My name is ' + this.name);
	}
}

class Programmer extends Animal {
	constructor(name) {
		super(name); // must have super(): missing super() call in constructor
	}

	program() {
		console.log("I'm coding...");
	}
}

let animal = new Animal('kitty');
let programmer = new Programmer('react');
animal.sayMyName();     // My name is kitty
programmer.sayMyName(); // My name is react
programmer.program();   // I'm coding...