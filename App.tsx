import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style='auto' />
			<Navigation />
		</SafeAreaProvider>
	);
}
