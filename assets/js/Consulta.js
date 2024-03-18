let animals = (() => {
	const url = 'https://raw.githubusercontent.com/zanozano/animals-json/master/animals.json';
	const getData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return { getData };
})();

export default animals;
