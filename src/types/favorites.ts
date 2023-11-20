// types/favorites.ts

import { Character } from './characters'

export interface FavoritesState {
  favorites: Character[]
}

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES
  payload: Character
}

interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES
  payload: Character
}

export type FavoritesActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction