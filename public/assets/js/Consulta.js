let animales = (() => {
	const url = 'http://localhost:5500/animales.json';
	const getData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return { getData };
})();
// EXPORT LET ANIMALES
export default animales;
