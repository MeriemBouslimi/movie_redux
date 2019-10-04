import { ADD_MOVIE } from "./action-type";
import { SET_FILTER } from "./action-type";
import { SET_RATING } from "./action-type";


export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
export function searchRating(rating){
  
 return{type :SET_RATING,rating }
}

export function searchFiltring(filterValue) {
  return{type :SET_FILTER,filterValue }
  
  }