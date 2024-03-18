import Animal from './Animal.js';
//LEON
class Lion extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const rugir = `./assets/sounds/Rugido.mp3`;
		return rugir;
	}
}
//LOBO
class Wolf extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const aullar = `./assets/sounds/Aullido.mp3`;
		return aullar;
	}
}
//OSO
class Bear extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const gruñir = `./assets/sounds/Gruñido.mp3`;
		return gruñir;
	}
}
//SERPIENTE
class Snake extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const sisear = `./assets/sounds/Siseo.mp3`;
		return sisear;
	}
}
//AGUILA
class Eagle extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const chillar = `./assets/sounds/Chillido.mp3`;
		return chillar;
	}
}
//
export { Lion, Wolf, Bear, Snake, Eagle };
