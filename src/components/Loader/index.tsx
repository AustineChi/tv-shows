import spinner from "../../assets/spinner.gif";

import { Container, LoaderImg } from "./Loader.styles";

export const Loader = () => {
	return (
		<Container>
			<LoaderImg src={spinner} alt="Loading..." />
		</Container>
	);
};

