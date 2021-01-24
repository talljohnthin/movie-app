import { SET_FAVORITE } from "./favorite.types";

export const movieList = 'local-movie-list'

export const getMovieListFromLocalStorage = () => {
    const localStorageMovies = JSON.parse(localStorage.getItem(movieList))
    return {
        type: SET_FAVORITE,
        payload: localStorageMovies === null ? [] : localStorageMovies
    }
}

