import {
    STOP_FETCHING_MOVIES,
    START_FETCHING_MOVIES,
    SET_MOVIES,
    SET_MOVIE
} from "../actions/movie/movie.types";
  
const initialState = {
    list: [],
    movie:{},
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_MOVIES:
        return {
            ...state,
            loading: true
        };
        case STOP_FETCHING_MOVIES:
        return {
            ...state,
            loading: false
        };
        case SET_MOVIES:
        return {
            ...state,
            list: action.payload
        };
        case SET_MOVIE:
        return {
            ...state,
            movie: action.payload
        };
        default:
        return state;
    }
};

export default reducer;
  