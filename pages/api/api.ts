export const getSearchPerson = async (search: string) => {
  return await fetch(`${process.env.SWAPI}/people/?search=${search}`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data?.results) {
      return data?.results;
    } else {
      throw new Error(`getSearchPerson ERROR: ${data}`);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
}

export const getPersonDetails = async (query: string, id: string, error: any) => {
  return await fetch(`${process.env.SWAPI}/${query}/${id}/`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          return data;
        } else {
          throw new Error(`getFilmsById ERROR: ${error}`);
        }
      })
      .catch((err) => {
        throw new Error(err);
      })
}