import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface PrimaryButtonProps { 
  text: string;
}

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
	return (
		<View>
			<Text>{text}</Text>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({});
