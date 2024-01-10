import {
  FETCH_TMPS_REQUEST,
  FETCH_TMPS_SUCCESS,
  FETCH_TMPS_FAILURE,
} from "./actionTypes";

export const fetchTmps = () => {
  console.log("fetchPosts");
  return async (dispatch) => {
    dispatch({ type: FETCH_TMPS_REQUEST });
    try {
      const response = await fetch("http://localhost:3000/api/temperature");
      const data = await response.json();
      dispatch({ type: FETCH_TMPS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TMPS_FAILURE, error });
    }
  };
};
