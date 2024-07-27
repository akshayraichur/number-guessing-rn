import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomePage = () => {
	return (
		<>
			{/* <StatusBar style='light' /> */}
			<SafeAreaView>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Enter Number..'
						style={styles.textInput}
						maxLength={2}
						keyboardType='number-pad'
						placeholderTextColor='#808080'
					/>
					{/* <Text style={styles.title}>Start Game Screen</Text> */}
					<PrimaryButton text='Reset' />
					<PrimaryButton text='Confirm' />
				</View>
			</SafeAreaView>
		</>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 16,
		marginHorizontal: 24,
		backgroundColor: "#4e0329",
		borderRadius: 8,
		elevation: 4, // boxShadow -> only available in android, not in ios
		// the below is for ios shadow
		shadowOffset: { width: 0, height: 2 },
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowRadius: 6,
	},
	textInput: {
		height: 50,
		fontSize: 24,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		// width: 150,
		textAlign: "center",
	},
	title: {
		color: "white",
	},
});
