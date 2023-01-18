import { Text, View, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../styles";
import Button from "./Button";

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		width: "100%",
		padding: 20,
		paddingBottom: 60,
		zIndex: 2,
		backgroundColor: "white",
	},
});

interface ContentProps {
	item: any;
}

const DetailContent: React.FC<ContentProps> = ({ item }) => {
	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<Text style={globalStyles.description}>{item.description}</Text>
			<Text style={globalStyles.title}>{item.title}</Text>
			<Text style={{ ...globalStyles.subTitle, marginVertical: 5 }}>€{item.price}</Text>
			<Text style={globalStyles.paragraph}>{item.text}</Text>
			<View style={globalStyles.expand} />
			<Button title='order' onPress={() => console.log("pressed")} />
		</ScrollView>
	);
};

export default DetailContent;
