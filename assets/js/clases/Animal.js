class Animal {
	constructor(nombre, edad, img, comentarios, sonido, id) {
		let _nombre = nombre;
		let _edad = edad;
		let _img = img;
		let _comentarios = comentarios;
		let _sonido = sonido;
		let _id = id;

		this.getNombre = () => _nombre;
		this.getEdad = () => _edad;
		this.getImg = () => _img;
		this.getComentarios = () => _comentarios;
		this.getSonido = () => _sonido;
		this.getId = () => _id;

		this.setComentarios = (newComentarios) => (_comentarios = newComentarios);
	}

	get Nombre() {
		return this.getNombre();
	}
	get Edad() {
		return this.getEdad();
	}
	get Img() {
		return this.getImg();
	}
	get Comentarios() {
		return this.getComentarios();
	}
	set Comentarios(newComentarios) {
		return (this.setComentarios = newComentarios);
	}
	get Sonido() {
		return this.getSonido();
	}
	get Id() {
		return this.getId();
	}
}

export default Animal;
