export const getSearchPerson = async (search: string) => {
  return await fetch(`https://swapi.dev/api/people/?search=${search}`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data?.results) {
      return data?.results;
    } else {
      throw new Error(`getSeachPerson ERROR: ${data}`);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
}

export const getPersonFilms = async (number: string) => {
  return await fetch (`https://swapi.dev/api/films/${number}/`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data?.results) {
      return data?.results;
    } else {
      throw new Error(`getSeachPerson ERROR: ${data}`);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
}