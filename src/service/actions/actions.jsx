import { AXIOS_FETCH } from "../Constants";
export const country = (region) => {
  console.log("action", region);
  return {
    data: `https://restcountries.eu/rest/v2/region/${region}`,
    type: AXIOS_FETCH,
  };
};
