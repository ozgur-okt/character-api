import { CharactersState } from "../../types/characters"
import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, SET_CURRENT_CHARACTERS } from "./actions"

const initialState: CharactersState = {
  loading: false,
  characters: [],
  currentCharacters: [],
  error: null,
}

const charactersReducer = (
  state = initialState,
  action: any
): CharactersState => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SET_CURRENT_CHARACTERS:
      return {
        ...state,
        currentCharacters: action.payload,
      }
    default:
      return state
  }
}

export default charactersReducer