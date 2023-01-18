import { useEffect, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Animated } from "react-native";

interface BackButtonProps {
	navigation: any;
}

const BackButton: React.FC<BackButtonProps> = ({ navigation }): JSX.Element => {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 250,
			delay: 500,
			useNativeDriver: true,
		}).start();
	}, []);

	return (
		<Animated.View
			style={{
				opacity,
				position: "absolute",
				top: 50,
				left: 30,
				right: 0,
				zIndex: 2,
				flexDirection: "row",
				justifyContent: "space-between",
			}}>
			<FontAwesome name='chevron-left' size={20} onPress={() => navigation.goBack()} />
		</Animated.View>
	);
};

export default BackButton;
