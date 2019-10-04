import { createStore,combineReducers } from "redux";
import filterReducer from "../reducers/reducer-filter";
import ratingReducer from "../reducers/reducer-rating";
import movieReducer from "../reducers/reducers-cards";



const store = createStore(combineReducers({rating:ratingReducer,filterValue:filterReducer,movies:movieReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;