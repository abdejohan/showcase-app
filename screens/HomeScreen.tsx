import "react-native-gesture-handler";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import globalStyles from "../styles";
import { SharedElement } from "react-navigation-shared-element";
import { items } from "../utils";
import IntroScreen from "./IntroScreen";

const styles = StyleSheet.create({
	heroContainer: {
		width: "100%",
		height: "50%",
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		zIndex: 2,
		overflow: "hidden",
	},
	heroImage: {
		flex: 1,
		width: "100%",
		borderWidth: 1,
	},
});

interface HomeProps {
	navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
	return (
		<>
			<IntroScreen />
			<View style={globalStyles.container}>
				<View
					style={{
						position: "absolute",
						height: "100%",
						width: "100%",
						zIndex: 3,
						backgroundColor: "black",
					}}
				/>
				<Pressable
					onPress={() => navigation.navigate("Overview", { item: items[0] })}
					style={({ pressed }) => [{ ...styles.heroContainer }]}>
					<SharedElement id={items[0].id} style={{ flex: 1 }}>
						<Image
							source={items[0].image}
							style={styles.heroImage}
							resizeMode='contain'
						/>
					</SharedElement>
				</Pressable>

				<View
					style={{
						backgroundColor: "#FCD867",
						width: "100%",
						height: "20%",
						top: -30,
						padding: 30,
						justifyContent: "center",
						paddingTop: 30,
						borderBottomLeftRadius: 30,
						borderBottomRightRadius: 30,
					}}>
					<Text style={globalStyles.title}>New Sweet Shop</Text>
					<Text style={globalStyles.title}>Cupcake Box</Text>
				</View>
				<View
					style={{
						top: -60,
						backgroundColor: "#36B3A3",
						padding: 30,
						borderRadius: 30,
					}}>
					<Text style={{ maxWidth: "90%", color: "white" }}>
						Choose from our regular and mini cupcakes.
					</Text>
				</View>
			</View>
		</>
	);
};

export default HomeScreen;
