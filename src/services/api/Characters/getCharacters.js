import { AxiosRAM } from "../axiosInstance";

const getCharacters = (pageNumber = "", queryParams = {}) => {
  const { name, species, status } = queryParams;

  let url = `character/?page=${pageNumber}`;
  const hasQueryParams = Object.keys(queryParams).length > 0;

  const formattedSpecies = encodeURIComponent(species);
  const formattedName = encodeURIComponent(name);


  if (hasQueryParams && name) url += `&name=${formattedName}`;
  if (hasQueryParams && species) url += `&species=${formattedSpecies}`;
  if (hasQueryParams && status) url += `&status=${status}`;
  return new Promise((resolve, reject) => {
    AxiosRAM.get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export default getCharacters;
