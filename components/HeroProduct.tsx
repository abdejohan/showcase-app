import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Pressable, Image, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Product, RootStackParamList } from "../types";
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
	heroContainer: {
		width: "100%",
		height: "50%",
		overflow: "hidden",
		zIndex: 2,
	},
	heroImage: {
		flex: 1,
		width: "100%",
		borderWidth: 1,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
});

interface PushProductProps {
	product: Product;
}

const HeroProduct: React.FC<PushProductProps> = ({ product }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<Pressable
			onPress={() => navigation.navigate("Details", product)}
			style={({ pressed }) => [{ ...styles.heroContainer }]}>
			<SharedElement id={product.id} style={{ flex: 1 }}>
				<Image source={product.image} style={styles.heroImage} resizeMode='contain' />
			</SharedElement>
		</Pressable>
	);
};

export default HeroProduct;
