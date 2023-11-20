// reducers/favorites.ts

import { FavoritesState, FavoritesActionTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../../types/favorites'

const initialState: FavoritesState = {
  favorites: [],
}

const favoritesReducer = (state = initialState, action: FavoritesActionTypes): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(character => character.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default favoritesReducer