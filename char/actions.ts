import { Dispatch } from "redux";

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

type Character = {
  id: number;
  name: string;
  // other character properties
};

interface FetchCharactersRequestAction {
  type: typeof FETCH_CHARACTERS_REQUEST;
}

interface FetchCharactersSuccessAction {
  type: typeof FETCH_CHARACTERS_SUCCESS;
  payload: Character[];
}

interface FetchCharactersFailureAction {
  type: typeof FETCH_CHARACTERS_FAILURE;
  payload: string;
}

export type CharactersActionTypes =
  | FetchCharactersRequestAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction;

  export const fetchCharactersRequest = (): FetchCharactersRequestAction => ({
    type: FETCH_CHARACTERS_REQUEST,
  });
  
  export const fetchCharactersSuccess = (
    characters: Character[]
  ): FetchCharactersSuccessAction => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  });
  
  export const fetchCharactersFailure = (
    error: string
  ): FetchCharactersFailureAction => ({
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  });

  export const fetchCharacters = () => {
    return (dispatch: Dispatch<CharactersActionTypes>) => {
      dispatch(fetchCharactersRequest());
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => dispatch(fetchCharactersSuccess(data.results)))
        .catch((error) => dispatch(fetchCharactersFailure(error.message)));
    };
  };