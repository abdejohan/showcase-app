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
});

const globalStyles = { ...styles, ...typography };

export default globalStyles;
