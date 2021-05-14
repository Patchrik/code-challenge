export const getSearchPerson = async (search: string) => {
	// I prefer putting my fetch in a try catch block. But I'm not sure if this is needed because useQuery has
	// an error prop on it for it's status? I figure it's still best practice to do some error handling. But this
	// could be better.
	try {
		const response = await fetch(
			`https://swapi.dev/api/people/?search=${search}`
		);
		if (response.ok) {
			const data = await response.json();
			// We're returning the data.results because in index.tsx the way that the data object is passed down to the children is looking for the results array.
			// passing just the data will not work.
			return data.results;
		} else {
			console.log("ERROR: " + response.status);
		}
	} catch (error) {
		console.log(error);
	}

	// Original below.
	// One I'm not a huge fan of how .then() blocks read, so I've been moving away from them, SEE ABOVE.
	// Seems like from what I've read you can send useQuery a async function although I saw a lot of videos
	// with Tanner Linsley using axios.get over fetch() I'm not too familiar with axios so I just used fetch() and
	// made it work.

	// return await fetch(`https://swapi.dev/api/people/?search=${search}`, {
	//   method: 'GET',
	// })
	// .then((response) => {
	//   return response.json();
	// })
	// .catch((err) => {
	//   throw new Error(err);
	// });
};
