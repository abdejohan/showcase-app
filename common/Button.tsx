import { Button as RNButton, Pressable, StyleSheet, Text } from "react-native";
import globalStyles from "../styles";

interface ButtonProps {
	navigation?: any;
	title: string;
	onPress: () => void;
}

const styles = StyleSheet.create({
	title: {
		...globalStyles.subTitle,
		textAlign: "center",
		color: "white",
		textTransform: "uppercase",
	},
});

const Button: React.FC<ButtonProps> = ({ navigation, title, onPress }): JSX.Element => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					padding: 10,
					backgroundColor: pressed ? "#FCD867" : "#36B3A3",
					borderRadius: 10,
				},
			]}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

export default Button;
