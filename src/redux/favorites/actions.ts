// actions/favorites.ts

import { Character } from '../../types/characters'
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, FavoritesActionTypes } from '../../types/favorites'

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