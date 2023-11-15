import axios from 'axios';
import { Dispatch } from 'redux';

// Define the character type
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

// Define the action type
interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  payload: Character[];
}

const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => async (dispatch: Dispatch<GetCharactersAction>) => {
  const res = await axios.get<{ results: Character[] }>("https://rickandmortyapi.com/api/character");
  dispatch({
    type: GET_CHARACTERS,
    payload: res.data.results,
  });
};