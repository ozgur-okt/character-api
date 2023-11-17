export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharactersRequest = () => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersRequest());
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => dispatch(fetchCharactersSuccess(data.results)))
      .catch((error) => dispatch(fetchCharactersFailure(error.message)));
  };
};
