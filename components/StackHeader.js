import { Pressable, Text, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function StackHeader(props) {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#fb07f6", "#00d4ff"]}
      style={{ height: "25%" }}
      start={{ x: 1.5, y: -3 }}
      end={{ x: -3, y: 1.5 }}
    >
      <StatusBar style="light" />
      <Pressable onPress={() => navigation.navigate(props.navigate)}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ marginTop: "10%", marginLeft: "5%" }}
        />
      </Pressable>
      <Text
        style={{
          fontSize: width / 15,
          color: "#fff",
          marginLeft: "5%",
          marginTop: 5,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
    </LinearGradient>
  );
}
