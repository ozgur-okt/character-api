import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, SET_CHARACTERS, SET_CURRENT_CHARACTERS } from "../redux/characters/actions"

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

export type CharactersState = {
  loading: boolean
  characters: Character[]
  currentCharacters: Character[]
  error: string | null
}

export type CharacterProps = {
  character: Character
}

export type OtherCharactersProps = {
  characters: Character[];
}

export type FetchCharactersRequestAction = {
  type: typeof FETCH_CHARACTERS_REQUEST
}
export type FetchCharactersSuccessAction = {
  type: typeof FETCH_CHARACTERS_SUCCESS
  payload: Character[]
}
export type FetchCharactersFailureAction = {
  type: typeof FETCH_CHARACTERS_FAILURE
  payload: string
}
export type SetCharactersAction = {
  type: typeof SET_CHARACTERS
  payload: Character[]
}

export type SetCurrentCharactersAction = {
  type: typeof SET_CURRENT_CHARACTERS
  payload: Character[]
}
export type CharactersActionTypes =
  | FetchCharactersRequestAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction
  | SetCurrentCharactersAction
  | SetCharactersAction
