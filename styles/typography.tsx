import { StyleSheet } from "react-native";

const typography = StyleSheet.create({
	title: {
		fontSize: 22,
		lineHeight: 22,
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 18,
		lineHeight: 20,
	},
	description: {
		fontSize: 14,
		lineHeight: 14,
		color: "grey",
	},
	paragraph: {
		fontSize: 16,
		lineHeight: 18,
		letterSpacing: -0.8,
	},
});

export default typography;
