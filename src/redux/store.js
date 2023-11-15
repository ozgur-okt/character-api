import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { reducers } from './reducers/reducers'


const rootReducer = combineReducers({
  data : reducers,
})

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))

export default store