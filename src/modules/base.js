import axios from "axios";

export const API_KEY = 'e55ea915735ed18894266f6aca77623c' // Soon to be transfer to dot env

export const baseURL = `https://api.themoviedb.org/3`; // Soon to be transfer to dot env

export const imageBaseURL = 'https://image.tmdb.org/t/p'

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
