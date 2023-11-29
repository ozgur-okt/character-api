import { Dispatch } from "redux"
import { FetchLocationsFailureAction, FetchLocationsRequestAction, FetchLocationsSuccessAction, Location, LocationsActionTypes } from "../../types/locations"

export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST'
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE'
export const SET_CURRENT_LOCATIONS = 'SET_CURRENT_LOCATIONS'

export const fetchLocationsRequest = (): FetchLocationsRequestAction => ({
  type: FETCH_LOCATIONS_REQUEST,
})

export const fetchLocationsSuccess = (
  locations: Location[]
): FetchLocationsSuccessAction => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: locations,
})

export const fetchLocationsFailure = (
  error: string
): FetchLocationsFailureAction => ({
  type: FETCH_LOCATIONS_FAILURE,
  payload: error,
})

export const fetchLocations = () => {
  return (dispatch: Dispatch<LocationsActionTypes>) => {
    dispatch(fetchLocationsRequest())
    fetch('https://rickandmortyapi.com/api/location')
      .then((response) => response.json())
      .then((data) => dispatch(fetchLocationsSuccess(data.results)))
      .catch((error) => dispatch(fetchLocationsFailure(error.message)))
  }
}

export const setCurrentLocations = (locations: Location[]): LocationsActionTypes => ({
  type: SET_CURRENT_LOCATIONS,
  payload: locations,
})