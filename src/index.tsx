import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TvShowsState from "./contexts/tv-shows/TvShowsState";
import AlertsState from "./contexts/alerts/AlertsState";

import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/Global.styles";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<TvShowsState>
			<AlertsState>
				<App />
			</AlertsState>
		</TvShowsState>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
