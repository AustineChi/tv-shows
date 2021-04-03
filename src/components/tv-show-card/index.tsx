import { TvShowItemModel } from "../../models/TvShowItem.interface";
import {
	Listitem,
	TvShowImage,
	ListitemInfo,
	InfoName,
	InfoRating,
} from "./TvShowCard.styles";

export const TvShowCard = ({ image, name, rating, id }: TvShowItemModel) => {
	return (
		<Listitem to={`/tv-show/${id}`}>
			<TvShowImage src={image} alt={name} />
			<ListitemInfo>
				<InfoName>{name}</InfoName>
				<InfoRating>{rating}</InfoRating>
			</ListitemInfo>
		</Listitem>
	);
};

