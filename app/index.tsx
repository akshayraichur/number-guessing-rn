import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>HomePage</Text>
				<PrimaryButton text='Hi there' />
			</View>
		</SafeAreaView>
	);
};

export default HomePage;

const styles = StyleSheet.create({});
