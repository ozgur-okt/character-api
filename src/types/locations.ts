import { FETCH_LOCATIONS_FAILURE, FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS } from "../redux/locations/actions"

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
    error: string
  }

  export interface FetchLocationsRequestAction {
    type: typeof FETCH_LOCATIONS_REQUEST
  }
  export interface FetchLocationsSuccessAction {
    type: typeof FETCH_LOCATIONS_SUCCESS
    payload: Location[]
  }
  export interface FetchLocationsFailureAction {
    type: typeof FETCH_LOCATIONS_FAILURE
    payload: string
  }
  export type LocationsActionTypes =
  | FetchLocationsRequestAction
  | FetchLocationsSuccessAction
  | FetchLocationsFailureAction