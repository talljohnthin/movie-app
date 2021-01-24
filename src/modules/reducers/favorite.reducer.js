import { SET_FAVORITE } from "../actions/favorite/favorite.types";
  
const initialState = {
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
        return {
            ...state,
            list: action.payload
        };
        default:
        return state;
    }
};

export default reducer;
  