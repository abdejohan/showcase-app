import { StyleSheet } from "react-native";
import typography from "./typography";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4EADF",
		alignItems: "center",
	},
	test: {
		borderWidth: 1,
		borderColor: "red",
	},
	expand: { flexGrow: 1 },
	darkfade: { backgroundColor: "#00000066" },
	darkestfade: { backgroundColor: "#00000099" },
});

const globalStyles = { ...styles, ...typography };

export default globalStyles;
