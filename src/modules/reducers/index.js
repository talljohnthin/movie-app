import { combineReducers } from "redux";
import Movie from "./movie.reducer";
import Favorites from "./favorite.reducer"

const reducers = combineReducers({
    movies: Movie,
    favorites:Favorites
});

export default reducers;
