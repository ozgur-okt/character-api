import { Character } from './characters'

export type FavoritesState = {
  favorites: Character[]
}

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

type AddToFavoritesAction = {
  type: typeof ADD_TO_FAVORITES
  payload: Character
}

type RemoveFromFavoritesAction = {
  type: typeof REMOVE_FROM_FAVORITES
  payload: Character
}

export type FavoritesActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction