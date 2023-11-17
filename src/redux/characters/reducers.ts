import { CharactersState } from "../../types/characters";
import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS } from "./actions";



const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
};

const charactersReducer = (
  state = initialState,
  action: any
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
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;