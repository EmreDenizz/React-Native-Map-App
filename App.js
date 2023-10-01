import * as React from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import MapView, { } from "react-native-maps"

export default function App() {
	return (
		<View style={{ marginTop: 50, flex: 1 }}>
			<MapView
				style={styles.map}
                minZoomLevel={7}
				initialRegion={{
					latitude: 43.6510,
		            longitude: -79.347,
					latitudeDelta: 0.8,
					longitudeDelta: 0.8
				}}
				provider="google"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
})
