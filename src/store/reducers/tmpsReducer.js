import {
  FETCH_TMPS_REQUEST,
  FETCH_TMPS_SUCCESS,
  FETCH_TMPS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  tmps: [],
  error: null,
};

const tmpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TMPS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TMPS_SUCCESS:
      return {
        ...state,
        loading: false,
        tmps: action.payload,
      };
    case FETCH_TMPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default tmpsReducer;
