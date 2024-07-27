import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

interface PrimaryButtonProps {
	text: string;
}

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
	const onPressHandler = () => {
		console.log("Button Pressed");
	};
	return (
		<View style={styles.container}>
			<Pressable
				onPress={onPressHandler}
				style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : styles.button)}
				android_ripple={{ color: "#dda32f" }}>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		borderRadius: 28,
		marginVertical: 8,
		overflow: "hidden",
	},
	button: {
		backgroundColor: "#ddb52f",
		paddingVertical: 10,
		paddingHorizontal: 20,
		elevation: 4,
	},
	text: {
		color: "black",
		textAlign: "center",
		fontWeight: "bold",
	},
	pressed: {
		opacity: 0.75,
	},
});
