import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";
import axios from "axios";

export const saveComment = comment => {
  return { type: SAVE_COMMENT, payload: comment };
};

export const fetchComment = () => async dispatch => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );
  return dispatch({ type: FETCH_COMMENT, payload: response });
};
