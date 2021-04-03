import { AlertModel } from "../../models/Alert.interface";
import { AlertBox, AlertIcon, Text } from "./Alert.styles";

export const Alert = ({ type, message }: AlertModel): JSX.Element => {
	return (
		<AlertBox type={type}>
			<AlertIcon /> <Text>{message}</Text>
		</AlertBox>
	);
};
