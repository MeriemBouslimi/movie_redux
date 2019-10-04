import { SET_RATING } from "../actions/action-type";

function ratingReducer(state = 0, action) {
  if (action.type === SET_RATING) {
    return action.rating;
  }
  return state;
}
export default ratingReducer;