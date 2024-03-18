//IMPORT CONSULTA.JS
import Animals from './Consulta.js';

document.getElementById('animal').addEventListener('click', async () => {
	const aSelected = document.getElementById('animal');
	if (
		aSelected.value == 'Lion' ||
		aSelected.value == 'Wolf' ||
		aSelected.value == 'Bear' ||
		aSelected.value == 'Snake' ||
		aSelected.value == 'Eagle '
	) {
		//CONSULTA JSON
		const { animals } = await Animals.getData();
		//
		const animal = document.getElementById('animal').value;
		//IMG ANIMAL
		const imgAnimal = animals.find((element) => element.name == animal).imagen;
		//SET IMG
		document.getElementById(
			'preview'
		).style.backgroundImage = `url(./assets/imgs/${imgAnimal})`;
	}
});
