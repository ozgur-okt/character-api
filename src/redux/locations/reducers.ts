
import { LocationsActionTypes, LocationsState } from "../../types/locations"
import { FETCH_LOCATIONS_FAILURE, FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS } from "./actions"


const initialState: LocationsState = {
    loading: false,
    locations: [],
    error: '',
  }
  
  const reducer = (
    state = initialState,
    action: LocationsActionTypes
  ): LocationsState => {
    switch (action.type) {
      case FETCH_LOCATIONS_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case FETCH_LOCATIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          locations: action.payload,
          error: '',
        }
      case FETCH_LOCATIONS_FAILURE:
        return {
          ...state,
          loading: false,
          locations: [],
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  export default reducer