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
const SCREEN_HEIGHT = Dimensions.get("window").height;
const animatedValue = new Animated.Value(0);

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
	animatedView: {
		position: "absolute",
		width: "100%",
		height: "100%",
		bottom: animatedValue as any,
		flex: 1,
		zIndex: 4,
	},
});

const IntroScreen: React.FC = (): JSX.Element => {
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
		<Animated.View style={styles.animatedView}>
			<ImageBackground source={introDonut} resizeMode='cover' style={styles.image}>
				<StatusBar style='light' />
				<ActivityIndicator size='large' />
				<Text style={styles.text}>Baking donuts..</Text>
			</ImageBackground>
		</Animated.View>
	);
};

export default IntroScreen;
