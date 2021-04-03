import { Container, Title, View, Text } from "../styles/Main.styles";

const About = () => {
	return (
		<Container>
			<Title>About</Title>
			<View>
				<Text>This is a simple react app to display tv shows using TVMAZE API (https://www.tvmaze.com/api).</Text>
				<Text>
					The application was built with create react app, styled
					components, typescript, context api, react testing library,
					etc.
				</Text>
				<Text>
					The main purpose of this app is to experiment with building
					an app with context api and userReducer, instead of the
					normal redux archiecture I use for bigger projects in my
					work setting.
				</Text>

				<Text>This application is deployed to netlify.</Text>
			</View>
		</Container>
	);
};

export default About;
