//IMPORT CONSULTA.JS
import Animales from './Consulta.js';
//CLICK
document.getElementById('animal').addEventListener('click', async () => {
	const aSelected = document.getElementById('animal');
	if (
		aSelected.value == 'Leon' ||
		aSelected.value == 'Lobo' ||
		aSelected.value == 'Oso' ||
		aSelected.value == 'Serpiente' ||
		aSelected.value == 'Aguila'
	) {
		//CONSULTA JSON
		const { animales } = await Animales.getData();
		//
		const animal = document.getElementById('animal').value;
		//IMG ANIMAL
		const imgAnimal = animales.find((element) => element.name == animal).imagen;
		//SET IMG
		document.getElementById(
			'preview'
		).style.backgroundImage = `url(./assets/imgs/${imgAnimal})`;
	}
});
