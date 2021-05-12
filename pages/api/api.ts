export const getSearchPerson = async (search: string) => {
  return await fetch(`https://swapi.dev/api/people/?search=${search}`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    throw new Error(err);
  });
}