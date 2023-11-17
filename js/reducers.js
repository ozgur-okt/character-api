import {
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
  } from './actions';
  
  const initialState = {
    loading: false,
    characters: [],
    error: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHARACTERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CHARACTERS_SUCCESS:
        return {
          ...state,
          loading: false,
          characters: action.payload,
          error: '',
        };
      case FETCH_CHARACTERS_FAILURE:
        return {
          ...state,
          loading: false,
          characters: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;