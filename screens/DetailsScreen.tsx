import { View, StyleSheet } from "react-native";
import globalStyles from "../styles";
import { Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import BackButton from "../common/BackButton";
import DetailContent from "../common/DetailContent";

const styles = StyleSheet.create({
	heroContainer: {
		width: "100%",
		height: "30%",
		zIndex: 2,
		overflow: "hidden",
	},
	heroImage: {
		flex: 1,
		width: "100%",
		borderWidth: 1,
	},
});

interface DetailProps {
	route: any;
	navigation: any;
}

const DetailsScreen: React.FC<DetailProps> = ({ route, navigation }) => {
	const { product } = route.params;

	return (
		<View style={globalStyles.container}>
			<SharedElement id={product.id} style={styles.heroContainer}>
				<Image source={product.image} style={styles.heroImage} resizeMode='cover' />
			</SharedElement>
			<BackButton navigation={navigation} />
			<DetailContent product={product} />
		</View>
	);
};

export default DetailsScreen;
