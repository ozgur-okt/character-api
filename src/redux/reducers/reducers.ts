import { Reducer } from 'redux';

// Define the character type
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

// Define the state type
interface State {
  characters: Character[];
}

// Define the action type
interface GetCharactersAction {
  type: 'GET_CHARACTERS';
  payload: Character[];
}

// Define the type of all possible actions
type Action = GetCharactersAction;

const initialState: State = {
  characters: [],
};

export const reducers: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};