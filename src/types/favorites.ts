import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../redux/favorites/actions'
import { Character } from './characters'

export type FavoritesState = {
  favorites: Character[]
}

type AddToFavoritesAction = {
  type: typeof ADD_TO_FAVORITES
  payload: Character
}

type RemoveFromFavoritesAction = {
  type: typeof REMOVE_FROM_FAVORITES
  payload: Character
}

export type FavoritesActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction