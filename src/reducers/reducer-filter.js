import { SET_FILTER } from "../actions/action-type";


function filterReducer( state ="", action) {
  if (action.type === SET_FILTER) {
    return action.filterValue;
  }
  return state;
}
export default filterReducer; 