import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  screenHeight: {
    height: height,
  },
  logo: {
    width: 400,
    height: 200,
    marginTop: "30%",
  },
  welcomeText: {
    fontSize: width / 12,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "10%",
    marginBottom: "1%",
    marginTop: 36,
  },
  captionSmall: {
    fontSize: width / 24,
    color: "#fff",
    fontWeight: "400",
    width: "80%",
    marginBottom: 16,
  },
  captionBigger: {
    fontSize: width / 19,
    color: "#fff",
    fontWeight: "bold",
    width: "80%",
  },
});
