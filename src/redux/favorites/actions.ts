import { Character } from '../../types/characters'
import { FavoritesActionTypes } from '../../types/favorites'

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavorites = (character: Character): FavoritesActionTypes => {
  return {
    type: ADD_TO_FAVORITES,
    payload: character,
  }
}

export const removeFromFavorites = (character: Character): FavoritesActionTypes => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: character,
  }
}