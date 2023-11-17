import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "./actions";

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharactersState = {
  loading: boolean;
  characters: Character[];
  error: string;
};

const initialState: CharactersState = {
  loading: false,
  characters: [],
  error: '',
};

type FetchCharactersRequestAction = {
  type: typeof FETCH_CHARACTERS_REQUEST;
};

type FetchCharactersSuccessAction = {
  type: typeof FETCH_CHARACTERS_SUCCESS;
  payload: Character[];
};

type FetchCharactersFailureAction = {
  type: typeof FETCH_CHARACTERS_FAILURE;
  payload: string;
};

type CharactersActionTypes =
  | FetchCharactersRequestAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction;

  const reducer = (
    state = initialState,
    action: CharactersActionTypes
  ): CharactersState => {
    switch (action.type) {
      case FETCH_CHARACTERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CHARACTERS_SUCCESS:
        return {
          ...state,
          loading: false,
          characters: action.payload,
          error: '',
        };
      case FETCH_CHARACTERS_FAILURE:
        return {
          ...state,
          loading: false,
          characters: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;