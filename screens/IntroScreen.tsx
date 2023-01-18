import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	StyleSheet,
	Text,
	ActivityIndicator,
	Animated,
	Dimensions,
} from "react-native";
import Constants from "expo-constants";
import introDonut from "../assets/intro-donut.jpg";
const { height: SCREEN_HEIGHT, width } = Dimensions.get("window");
const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 20,
	},
	text: {
		color: "white",
		fontSize: 14,
		lineHeight: 22,
		fontWeight: "bold",
		textAlign: "center",
	},
});

const IntroScreen: React.FC = (): JSX.Element => {
	const animatedValue = new Animated.Value(0);

	const startTransition = () => {
		Animated.timing(animatedValue, {
			duration: 700,
			toValue: SCREEN_HEIGHT + Constants.statusBarHeight,
			useNativeDriver: false,
		}).start();
	};

	useEffect(() => {
		setTimeout(() => {
			startTransition();
		}, 3000);
	}, []);

	return (
		<Animated.View
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				bottom: animatedValue,
				flex: 1,
				zIndex: 4,
			}}>
			<ImageBackground source={introDonut} resizeMode='cover' style={styles.image}>
				<StatusBar style='light' />
				<ActivityIndicator size='large' />
				<Text style={styles.text}>Baking donuts..</Text>
			</ImageBackground>
		</Animated.View>
	);
};

export default IntroScreen;
