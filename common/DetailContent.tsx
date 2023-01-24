import { Text, View, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../styles";
import { Product } from "../types";
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
	product: Product;
}

const DetailContent: React.FC<ContentProps> = ({ product }) => {
	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<Text style={globalStyles.title}>{product.title}</Text>
			<Text style={globalStyles.description}>{product.description}</Text>
			<Text style={{ ...globalStyles.subTitle, marginVertical: 5 }}>
				€{product.price}
			</Text>
			<Text style={globalStyles.paragraph}>{product.text}</Text>
			<View style={globalStyles.expand} />
			<Button title='order' onPress={() => console.log("pressed")} />
		</ScrollView>
	);
};

export default DetailContent;
