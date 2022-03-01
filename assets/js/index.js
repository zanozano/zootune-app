import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/Tipo.js';
//
let zoo = [];
document.getElementById('btnRegistrar').addEventListener('click', () => {
	let nombre = document.getElementById('animal');
	let edad = document.getElementById('edad');
	let comentarios = document.getElementById('comentarios');
	let previewElement = document.getElementById('preview');
	//IMG
	let imageSrcBg = previewElement.style.backgroundImage;
	let imgSrc = imageSrcBg.slice(5, imageSrcBg.length - 2);
	//INSTANCIAS
	let newAnimal;
	if (nombre.value == 'Leon') {
		newAnimal = new Leon(nombre.value, edad.value, imgSrc, comentarios.value);
	} else if (nombre.value == 'Lobo') {
		newAnimal = new Lobo(nombre.value, edad.value, imgSrc, comentarios.value);
	} else if (nombre.value == 'Oso') {
		newAnimal = new Oso(nombre.value, edad.value, imgSrc, comentarios.value);
	} else if (nombre.value == 'Serpiente') {
		newAnimal = new Serpiente(nombre.value, edad.value, imgSrc, comentarios.value);
	} else if (nombre.value == 'Aguila') {
		newAnimal = new Aguila(nombre.value, edad.value, imgSrc, comentarios.value);
	}
	//PUSH
	if (nombre.value != 0 && edad.selectedIndex != 0 && imgSrc && comentarios.value) {
		zoo.push(newAnimal);
		console.log(zoo);
		reloadTable();
		audioAnimales();
		//RESET
		nombre.selectedIndex = 0;
		edad.selectedIndex = 0;
		comentarios.value = '';
		previewElement.style.backgroundImage = 'none';
		imageSrcBg = previewElement.style.backgroundImage = '#f0f0f0';
	} else {
		alert('Faltan datos por completar');
	}
});
//CARD ANIMAL
const reloadTable = () => {
	const animalesTemplate = document.getElementById('Animales');
	animalesTemplate.innerHTML = '';
	zoo.forEach((a, i) => {
		animalesTemplate.innerHTML += `<div id="${i}-animal" class="px-3 pb-2 participante" data-animal="${a.getNombre()}">
                                    <div class="card card-animal">
                                    <img data-toggle="modal" data-target="#exampleModal" src="${a.getImg()}" width="200" class="card-img-top img-fluid"/>
                                    <div id="${i}-sound" class="card-body">
                                      <i class="sound-icon fas fa-volume-up fa-2x">
                                      </i>
                                    </div>
                                    </div>
                                  </div>
                                  `;
	});
	//MODAL ANIMAL
	zoo.forEach((a, i) => {
		document.getElementById(`${i}-animal`).addEventListener('click', () => {
			const animalCard = document.getElementById('animal-modal');
			animalCard.innerHTML = `<div id="${i}-animal" class="px-3 pb-2 animal" data-animal="${a.getNombre()}">
                                <div class="card">
                                  <img src="${a.getImg()}" width="200" class="card-img-top img-fluid"/>
                                  <div class="card-body">
                                  <h4 class="card-title text-center"><strong>${a.getNombre()}</strong></h4>
                                  <hr class="w-50 mx-auto">
                                  <h6 class="card-text text-center">Edad: ${a.getEdad()}</h6>
                                  <h6 class="card-text text-center"><strong>Comentarios:</strong><br> ${a.getComentarios()}</h6>
                                  </div>
                                </div>
                            </div>
                            `;
		});
	});
};
//AUDIO ANIMAL
const audioAnimales = () => {
	zoo.forEach((a, i) => {
		const animalSound = document.getElementById('player');
		document.getElementById(`${i}-sound`).addEventListener('click', () => {
			animalSound.innerHTML = `<source src="${a.Sonido()}" type="audio/mpeg">`;
			//LOAD
			animalSound.load();
			//PLAY
			animalSound.play();
		});
	});
};
