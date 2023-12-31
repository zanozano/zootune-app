import Animal from './Animal.js';
//LEON
class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const rugir = `./assets/sounds/Rugido.mp3`;
		return rugir;
	}
}
//LOBO
class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const aullar = `./assets/sounds/Aullido.mp3`;
		return aullar;
	}
}
//OSO
class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const gruñir = `./assets/sounds/Gruñido.mp3`;
		return gruñir;
	}
}
//SERPIENTE
class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const sisear = `./assets/sounds/Siseo.mp3`;
		return sisear;
	}
}
//AGUILA
class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sonido() {
		const chillar = `./assets/sounds/Chillido.mp3`;
		return chillar;
	}
}
//
export { Leon, Lobo, Oso, Serpiente, Aguila };
