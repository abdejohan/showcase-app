import { StatusBar } from "expo-status-bar";
import { Text, View, Image, StyleSheet } from "react-native";
import globalStyles from "./styles";
import heroImage from "./assets/hero-image.jpg";

const styles = StyleSheet.create({
	heroContainer: {
		backgroundColor: "#70F5E4",
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

export default function App() {
	return (
		<View style={globalStyles.container}>
			<StatusBar style='auto' />
			<View style={styles.heroContainer}>
				<Image source={heroImage} style={styles.heroImage} resizeMode='contain' />
			</View>
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
	);
}
