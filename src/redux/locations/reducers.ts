
import { LocationsActionTypes, LocationsState } from "../../types/locations"
import { 
  FETCH_LOCATIONS_FAILURE, 
  FETCH_LOCATIONS_REQUEST, 
  FETCH_LOCATIONS_SUCCESS, 
  SET_CURRENT_LOCATIONS 
} from "./actions"

const initialState: LocationsState = {
  loading: false,
  locations: [],
  currentLocations: [],
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
    case SET_CURRENT_LOCATIONS:
      return {
        ...state,
        currentLocations: action.payload,
      }
    default:
      return state
  }
}

export default reducer