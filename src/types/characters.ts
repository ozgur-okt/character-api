import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from "../redux/store"
import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS } from "../redux/characters/actions"

export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
      name: string
      url: string
    }
    location: {
      name: string
      url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
  }

  export interface CharactersState {
    characters: Character[]
    loading: boolean
    error: string | null
  }

  export interface FetchCharactersRequestAction {
    type: typeof FETCH_CHARACTERS_REQUEST
  }
  export interface FetchCharactersSuccessAction {
    type: typeof FETCH_CHARACTERS_SUCCESS
    payload: Character[]
  }
  export interface FetchCharactersFailureAction {
    type: typeof FETCH_CHARACTERS_FAILURE
    payload: string
  }
  export type CharactersActionTypes =
  | FetchCharactersRequestAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction


export type CharactersThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>