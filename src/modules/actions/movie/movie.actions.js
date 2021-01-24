import { START_FETCHING_MOVIES, STOP_FETCHING_MOVIES, SET_MOVIES, SET_MOVIE } from "./movie.types";
import { axiosInstance, API_KEY } from "../../base";
  
  export const startFetchingMovies = () => {
    return {
      type: START_FETCHING_MOVIES,
    };
  };

  export const stopFetchingMovies = () => {
    return {
      type: STOP_FETCHING_MOVIES,
    };
  };
  
  export const setMovies = movies => {
    return {
      type: SET_MOVIES,
      payload: movies
    };
  };

  export const setMovie = movie => {
    return {
      type: SET_MOVIE,
      payload: movie
    };
  };


  export const fetchMovies = () => {
    return async (dispatch) => {
      try {
        dispatch(startFetchingMovies())
        const response = await axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=en-US`);
        console.log(response.data?.results)
        dispatch(setMovies(response.data?.results))
        dispatch(stopFetchingMovies())
      } catch (error) {
        console.log(error)
        dispatch(stopFetchingMovies())
      }
    };
  };

  export const fetchMovie = movieID => {
    return async (dispatch) => {
      try {
        const response = await axiosInstance.get(`/movie/${movieID}?api_key=${API_KEY}`);
        console.log(response.data)
        dispatch(setMovie(response.data))
      } catch (error) {
        console.log(error)
      }
    };
  };
  