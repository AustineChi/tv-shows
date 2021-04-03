import { useContext } from "react";
import {TvShowCard, Loader, Searchbar} from "../components";
import TvShowsContext from "../contexts/tv-shows/tvShowsContext";
import {Container, Title, HomepageList} from "../styles/Main.styles";

const Home = () => {
	const showsContext = useContext(TvShowsContext);
  const { shows, loading } = showsContext;
  

	return (
		<Container>
			<Title>TV Shows</Title>
      <Searchbar/>

		{loading ? (
        <Loader />
      ) : (
        <HomepageList>
          {shows.map((item: any) => (
            <TvShowCard
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </HomepageList>
      )}
		</Container>
	);
};

export default Home;
