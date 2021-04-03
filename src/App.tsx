import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Navbar } from "./components";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import TVShowDetails from "./pages/TVShowDetails";

// styles
import {Container} from "./styles/Main.styles"

function App():JSX.Element {
	return (
		<Router>
			<Navbar />
            <Container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tv-show/:id" component={TVShowDetails} />
            </Switch>
            </Container>
		</Router>
	);
}

export default App;
