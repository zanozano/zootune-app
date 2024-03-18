import { Lion, Wolf, Bear, Snake, Eagle } from './clases/Tipo.js';

let zoo = [];
document.getElementById('btnRegistrar').addEventListener('click', () => {
	let nombre = document.getElementById('animal');
	let edad = document.getElementById('edad');
	let comentarios = document.getElementById('comentarios');
	let previewElement = document.getElementById('preview');

	let imageSrcBg = previewElement.style.backgroundImage;
	let imgSrc = imageSrcBg.slice(5, imageSrcBg.length - 2);

	let newAnimal;
	if (nombre.value == 'Lion') {
		newAnimal = new Lion(nombre.value, edad.value, imgSrc, comentarios.value,);
	} else if (nombre.value == 'Wolf') {
		newAnimal = new Wolf(nombre.value, edad.value, imgSrc, comentarios.value,);
	} else if (nombre.value == 'Bear') {
		newAnimal = new Bear(nombre.value, edad.value, imgSrc, comentarios.value,);
	} else if (nombre.value == 'Snake') {
		newAnimal = new Snake(nombre.value, edad.value, imgSrc, comentarios.value,);
	} else if (nombre.value == 'Eagle') {
		newAnimal = new Eagle(nombre.value, edad.value, imgSrc, comentarios.value,);
	}


	if (nombre.value != 0 && edad.selectedIndex != 0 && imgSrc && comentarios.value) {
		zoo.push(newAnimal);
		reloadTable();
		audioAnimales();
		//RESET
		nombre.selectedIndex = 0;
		edad.selectedIndex = 0;
		comentarios.value = '';
		previewElement.style.backgroundImage = 'none';
		imageSrcBg = previewElement.style.backgroundImage = '#f0f0f0';

		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			}
		});
		Toast.fire({
			icon: "success",
			title: "Animal added successfully"
		});
		console.log(zoo)
		previewElement.style.backgroundImage = '';
	} else {
		Swal.fire({
			icon: "warning",
			title: "Oops...",
			text: "Incomplete data. Please fill out all required fields",
		});
	}
});
//CARD ANIMAL
const reloadTable = () => {
	const animalsTemplate = document.getElementById('Animals');
	animalsTemplate.innerHTML = '';
	zoo.forEach((a, i) => {
		animalsTemplate.innerHTML += `<div class="card-animal" id="${i}-animal" data-animal="${a.getNombre()}">
												<div class="img-container" data-bs-toggle="modal" data-bs-target="#exampleModal">
												<img src="${a.getImg()}" />
												</div>										
												<div class="icon-container" id="${i}-sound" >
													<i class="fas fa-volume-up fa"></i>
												</div>
                                  		</div>
                                  `;
	});

	//MODAL ANIMAL
	zoo.forEach((a, i) => {
		document.getElementById(`${i}-animal`).addEventListener('click', () => {
			const animalCard = document.getElementById('animal-modal');
			animalCard.innerHTML = `
								<div id="${i}-animal" class="animal-modal" data-animal="${a.getNombre()}">
                                  <img src="${a.getImg()}" width="200" class="card-img-top img-fluid"/>
                                  
								 
                                  <h4 class="text-center">${a.getNombre()}</h4>
                                  <h6 class="text-center">Age: ${a.getEdad()}</h6>
                                  <h6 class="text-center">Comments:<br> ${a.getComentarios()}</h6>
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
