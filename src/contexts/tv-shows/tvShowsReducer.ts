import {TvShowsContextModel} from '../../models/TvShowsContext.interface'
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW,
  } from "../types";
  
  const showsReducer = (state: TvShowsContextModel, action: any) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_SHOWS:
        return {
          ...state,
          shows: action.payload,
          loading: false,
        };
      case SET_SINGLE_SHOW:
        return {
          ...state,
          singleShow: action.payload,
          loading: false,
        };
      case CLEAR_SINGLE_SHOW:
        return {
          ...state,
          singleShow: {},
        };
      default:
        return state;
    }
  };
  
  export default showsReducer;