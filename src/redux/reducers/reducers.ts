const initialState = {
  characters: [],
  locations: [],
};

export const reducers = (state = initialState, action : any) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };
    case 'GET_LOCATIONS':
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};
