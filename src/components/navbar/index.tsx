import { useContext } from "react";
import TvShowsContext from "../../contexts/tv-shows/tvShowsContext";
import {
	NavBarWrapper,
	Container,
	Nav,
	NavLink,
	LogoWrapper,
	Logo,
	SearchBox,
} from "./Navbar.styles";

export const Navbar: React.FC<{}> = () => {
	const {searchShows} = useContext(TvShowsContext)


	return (
		<NavBarWrapper>
			<Container>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<Nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<SearchBox
						placeholder="search..."
						onChange={(e) => searchShows(e.target.value)}
					/>
				</Nav>
			</Container>
		</NavBarWrapper>
	);
};
