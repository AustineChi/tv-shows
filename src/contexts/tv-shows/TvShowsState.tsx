import { useReducer } from "react";
import axios from "axios";
import TvShowsContext from "./tvShowsContext";
import TvShowsReducer from "./tvShowsReducer";
import {
	SEARCH_SHOWS,
	SET_LOADING,
	SET_SINGLE_SHOW,
	CLEAR_SINGLE_SHOW,
} from "../types";
import { TvShowsContextModel } from "../../models/TvShowsContext.interface";

const ShowsState = (props: any) => {
	const initialState: TvShowsContextModel = {
		shows: [],
		singleShow: {},
		loading: false,
	};

    const [state, dispatch] = useReducer(TvShowsReducer, initialState);

	const searchShows = async (searchTerm: string) => {
		dispatch({ type: SET_LOADING });

		const { data } = await axios.get(
			`https://api.tvmaze.com/search/shows?q=${searchTerm}`
		);

		console.log(data, "data")

		dispatch({
			type: SEARCH_SHOWS,
			payload: data,
		});
    };
    

	const getSingleShow = async (id: number) => {
		dispatch({
			type: SET_LOADING,
		});

		const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

		console.log(data);

		dispatch({
			type: SET_SINGLE_SHOW,
			payload: data,
		});
	};

	const clearSingleShow = () => {
		dispatch({
			type: CLEAR_SINGLE_SHOW,
		});
	};

	return (
		<TvShowsContext.Provider
			value={{
				shows: state.shows,
				singleShow: state.singleShow,
                loading: state.loading,
				searchShows,
				getSingleShow,
				clearSingleShow,
			}}
		>
			{props.children}
		</TvShowsContext.Provider>
	);
};

export default ShowsState;
