import { AXIOS_FETCH } from "../Constants";
import axios from "axios";

const initialState = {
  country: [],
  error: null,
};
export default function countryFetch(state = initialState, action) {
  switch (action.type) {
    case AXIOS_FETCH:
      console.log("reducer", action);
      return {
        ...state,
        countries: axios.get(action.data).then((response) => {
          console.log(response);
        }),
      };
    default:
      return state;
  }
}
