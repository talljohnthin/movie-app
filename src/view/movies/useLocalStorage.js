import { movieList } from '../../modules/actions/favorite/favorite.actions'

export const useLocalStorage = () => {
    const addToFavorite = movie => {
        const checkIfInLocalStorage = localStorage.getItem(movieList)
    
        if(checkIfInLocalStorage) {
            const localStorageMovieList = JSON.parse(localStorage.getItem(movieList))
            localStorageMovieList.push(movie)
            localStorage.setItem(movieList, JSON.stringify(localStorageMovieList))
        } else {
            const newMovieList = [movie]
            localStorage.setItem(movieList, JSON.stringify(newMovieList))
        }
    }
    
    const removeToFavorite = movieID => {
        const checkIfInLocalStorage = localStorage.getItem(movieList)

        if(checkIfInLocalStorage) {
            const localStorageMovieList = JSON.parse(localStorage.getItem(movieList))
            const filteredMovies = localStorageMovieList.filter(movie => movie.id !== movieID)
            localStorage.setItem(movieList, JSON.stringify(filteredMovies))
        } 
    }

    return { addToFavorite, removeToFavorite }
}
