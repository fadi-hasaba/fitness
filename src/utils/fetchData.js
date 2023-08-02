export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": "5fb38da472msh1c0004e70d3dcd9p1be00djsn02e434fcb044",
	},
};

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
		"X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
	},
};

export const foodOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "5fb38da472msh1c0004e70d3dcd9p1be00djsn02e434fcb044",
		"X-RapidAPI-Host": "tasty.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};
