import { useState, useContext } from "react";

import TvShowsContext from "../../contexts/tv-shows/tvShowsContext";
import AlertsContext from "../../contexts/alerts/alertsContext";

// Components
import { Alert } from "../index";

import {
	Searchbarwrapper,
	SearchbarForm,
	TextInput,
	SubmitButton,
} from "./SearchBar.styles";

export const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const { searchShows, shows } = useContext(TvShowsContext);
	const { alert, setAlert } = useContext(AlertsContext);

	const onSearchHandler = async (e: any) => {
		e.preventDefault();

		if (searchTerm === "") {
			setAlert("Please enter something", "danger");
		} else {
      await searchShows(searchTerm);
      console.log(shows);
      (shows.length ===0) &&	setAlert("No TV show was found", "primary");
    }
  };
  

	return (
		<Searchbarwrapper>
			{(alert && alert.message) && (
				<Alert message={alert.message} type={alert.type} />
			)}
			<SearchbarForm>
				<TextInput
					type="text"
					placeholder="Search For Tv Show"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<SubmitButton onClick={onSearchHandler}>SEARCH</SubmitButton>
			</SearchbarForm>
		</Searchbarwrapper>
	);
};
