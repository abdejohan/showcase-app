import { StyleSheet } from "react-native";
import typography from "./typography";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4EADF",
		alignItems: "center",
	},
	expand: {
		flexGrow: 1,
	},
	test: {
		borderWidth: 1,
		borderColor: "red",
	},
});

const globalStyles = { ...styles, ...typography };

export default globalStyles;
