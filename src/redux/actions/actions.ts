import axios from "axios";

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_LOCATIONS = "GET_LOCATIONS";

export const getCharacters = () => async (dispatch : any) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");
  dispatch({
    type: GET_CHARACTERS,
    payload: res.data.results,
  });
};

export const getLocations = () => async (dispatch : any) => {
  const res = await axios.get("https://rickandmortyapi.com/api/location");
  dispatch({
    type: GET_LOCATIONS,
    payload: res.data.results,
  });
};