import { Dispatch } from "redux"
import { 
  Character, 
  CharactersActionTypes, 
  FetchCharactersFailureAction, 
  FetchCharactersRequestAction, 
  FetchCharactersSuccessAction 
} from "../../types/characters"

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE'
export const SET_CURRENT_CHARACTERS = 'SET_CURRENT_CHARACTERS'

export const fetchCharactersRequest = (): FetchCharactersRequestAction => ({
  type: FETCH_CHARACTERS_REQUEST,
})

export const fetchCharactersSuccess = (
  characters: Character[]
): FetchCharactersSuccessAction => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
})

export const fetchCharactersFailure = (
  error: string
): FetchCharactersFailureAction => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
})

export const fetchCharacters = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCharactersRequest())
      const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
      const data = await response.json()
      const characterResponses = await Promise.all(
        data.residents.map((url: string) => fetch(url))
      )
      const characters: Character[] = await Promise.all(
        characterResponses.map((response: Response) => response.json())
      )
      console.log("actions", characters)
      dispatch(fetchCharactersSuccess(characters))
    } catch (error: any) {
      dispatch(fetchCharactersFailure(error.toString()))
    }
  }
}

export const setCurrentCharacters = (characters: Character[]): CharactersActionTypes => ({
  type: SET_CURRENT_CHARACTERS,
  payload: characters,
})