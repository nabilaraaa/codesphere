// SplashScreen.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Image,
} from "react-native";

export default function OnBoard3({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.buttonLewat}
				onPress={() => navigation.navigate("OnBoard4")}
			>
				<Text style={styles.text1}>Lewati</Text>
			</TouchableOpacity>
			<Image source={require("../assets/Onboard3.png")} style={styles.icon} />
			<TouchableOpacity
				style={styles.buttonArrow}
				onPress={() => navigation.navigate("OnBoard4")}
			>
				<Text style={styles.text4}>Yuk Mulai!</Text>
				<View style={styles.iconF}>
					<FontAwesomeIcon icon={faArrowRight} size={22} color="#213555" />
				</View>
			</TouchableOpacity>
			<Text style={styles.text2}>Dapatkan Sertifikat Online</Text>
			<Text style={styles.text3}>
				Kami harap kamu bisa menikmati pengalaman pembelajaran online bersama
				Codesphere. Selamat belajar!
			</Text>
			<View style={styles.indicator1} />
			<View style={styles.indicator2} />
			<View style={styles.indicator3} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	iconF: {
		left: 15,
		height: 40,
		width: 40,
		backgroundColor: "white",
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	text1: {
		fontSize: 15,
	},
	text2: {
		fontSize: 24,
		fontWeight: "bold",
		top: 110,
		right: 5,
		color: "#213555",
	},
	text3: {
		fontSize: 13,
		fontWeight: "bold",
		bottom: 245,
		right: 35,
		color: "#213555",
		position: "absolute",
		opacity: 0.7,
		maxWidth: 300,
	},
	text4: {
		color: "white",
		fontWeight: "bold",
	},
	buttonLewat: {
		position: "absolute",
		top: 60,
		right: 40,
	},
	buttonArrow: {
		position: "absolute",
		bottom: 80,
		right: 40,
		width: 150,
		height: 50,
		borderRadius: 50,
		backgroundColor: "#213555",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	indicator1: {
		position: "absolute",
		bottom: 105,
		right: 300,
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: "#213555",
		opacity: 0.5,
	},
	indicator2: {
		position: "absolute",
		bottom: 105,
		right: 275,
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: "#213555",
		opacity: 0.5,
	},
	indicator3: {
		position: "absolute",
		bottom: 105,
		right: 240,
		width: 25,
		height: 15,
		borderRadius: 50,
		backgroundColor: "#213555",
	},
	icon: {
		position: "absolute",
		width: 245,
		height: 205,
		top: 220,
	},
});
