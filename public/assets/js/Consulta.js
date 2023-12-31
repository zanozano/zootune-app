let animales = (() => {
	const url = 'http://localhost:5500/animals.json';
	const getData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return { getData };
})();

export default animales;
