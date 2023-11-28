import { FETCH_LOCATIONS_FAILURE, FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS, SET_CURRENT_LOCATIONS } from "../redux/locations/actions"

export type Location = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export type LocationsState = {
  loading: boolean
  locations: Location[]
  currentLocations: Location[]
  error: string
}

export type LocationCardProps = {
  location: Location;
}

export type FetchLocationsRequestAction = {
  type: typeof FETCH_LOCATIONS_REQUEST
}
export type FetchLocationsSuccessAction = {
  type: typeof FETCH_LOCATIONS_SUCCESS
  payload: Location[]
}
export type FetchLocationsFailureAction = {
  type: typeof FETCH_LOCATIONS_FAILURE
  payload: string
}

export type SetCurrentLocationsAction = {
  type: typeof SET_CURRENT_LOCATIONS
  payload: Location[]
}
export type LocationsActionTypes =
  | FetchLocationsRequestAction
  | FetchLocationsSuccessAction
  | FetchLocationsFailureAction
  | SetCurrentLocationsAction