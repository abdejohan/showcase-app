import "react-native-gesture-handler";
import { Text, View, Image, StyleSheet, Pressable, Dimensions } from "react-native";
import globalStyles from "../styles";
import { SharedElement } from "react-navigation-shared-element";
import { products } from "../utils";
import IntroScreen from "./IntroScreen";
import Animated, { FadeOut } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Product } from "../types";
import HeroProduct from "../components/HeroProduct";
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
	titleContainer: {
		backgroundColor: "#FCD867",
		width: "100%",
		height: "20%",
		top: -30,
		padding: 30,
		justifyContent: "center",
		paddingTop: 50,
		zIndex: 1,
	},
	hideContent: {
		position: "absolute",
		height: "100%",
		width: "100%",
		zIndex: 3,
		backgroundColor: "black",
	},
	gridImageWrapper: {
		top: -30,
		flexGrow: 1,
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	gridImage: {
		height: "100%",
		width: "100%",
	},
	bluryWrapper: {
		position: "absolute",
		width: "100%",
		bottom: 0,
		opacity: 0.8,
		...globalStyles.darkestfade,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	donutTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
	donutPrice: {
		color: "white",
		fontSize: 14,
	},
});

interface HomeProps {
	navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
	const [visible, setVisible] = useState(true);
	const [layoutHeight, setLayoutHeight] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setVisible(false);
		}, 4000);
	}, []);

	return (
		<>
			<IntroScreen />
			<View style={globalStyles.container}>
				{visible && <Animated.View exiting={FadeOut} style={styles.hideContent} />}
				<HeroProduct product={products[0]} />
				<View style={styles.titleContainer}>
					<Text style={globalStyles.title}>New Sweet Shop</Text>
					<Text style={globalStyles.title}>Donut Box</Text>
				</View>
				<View
					style={{ ...styles.gridImageWrapper, height: layoutHeight }}
					onLayout={(event) => {
						layoutHeight === 0
							? setLayoutHeight(event.nativeEvent.layout.height + 30)
							: undefined;
					}}>
					{products.map(
						(product: Product) =>
							product.id !== "1" && (
								<Pressable
									key={product.id}
									onPress={() => navigation.navigate("Overview", { product })}
									style={({ pressed }) => [{ height: "50%", width: "50%" }]}>
									<SharedElement id={product.id}>
										<Image
											source={product.image}
											style={styles.gridImage}
											resizeMode='stretch'
										/>
									</SharedElement>
									<View style={styles.bluryWrapper}>
										<Text style={styles.donutTitle}>{product.title}</Text>
										<Text style={styles.donutPrice}>${product.price}</Text>
									</View>
								</Pressable>
							)
					)}
				</View>
			</View>
		</>
	);
};

export default HomeScreen;
