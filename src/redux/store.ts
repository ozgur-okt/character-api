import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import locationsReducer from './locations/reducers'
import charactersReducer from './characters/reducers'
import favoritesReducer from './favorites/reducers'

const rootReducer = combineReducers({
  locations: locationsReducer,
  characters: charactersReducer,
  favorites: favoritesReducer,
  // Add other reducers here
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store