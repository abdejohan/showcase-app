import { ImageSourcePropType } from "react-native";

type RootStackParamList = {
	Home: undefined;
	Details: Product;
	Intro: undefined;
};

type Product = {
	id: string;
	title: string;
	description: string;
	text: string;
	price: string;
	image: ImageSourcePropType;
};

export { Product, RootStackParamList };
