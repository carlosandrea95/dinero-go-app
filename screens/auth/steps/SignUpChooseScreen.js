import React, { Component } from "react";
import { View, Text, TextInput, Pressable, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BtnIcon from "../../../components/BtnIcon";
import StackHeader from "../../../components/StackHeader";
const { width, height } = Dimensions.get("window");

export default function RegisterSreen({ navigation }) {
  const [registerType, setRegisterType] = React.useState(1);
  return (
    <View>
      <View style={{ height: "100%" }}>
        <StackHeader title={"Registro"} navigate="welcome" />
        <View
          style={{
            height: "80%",
            marginTop: "-10%",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#fff",
            alignItems: "center",
          }}
        >
          <View style={{ width: "85%", marginTop: "10%" }}>
            <Text
              style={{
                color: "#b243da",
                fontWeight: "bold",
                fontSize: width / 10,
              }}
            >
              Bienvenidos
            </Text>
            <Text
              style={{
                color: "#9299fa",
                fontWeight: "600",
                fontSize: width / 22,
              }}
            >
              Realiza pagos y cobros de manera fácil y segura
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <BtnIcon
              text="Soy Una Persona"
              backgroundColor={registerType == 1 ? "#b243da" : "#fff"}
              borderColor={registerType == 2 ? "#b243da" : "#fff"}
              iconColor={registerType == 2 ? "#b243da" : "#fff"}
              textColor={registerType == 2 ? "#b243da" : "#fff"}
              onPressFunction={() => setRegisterType(1)}
            ></BtnIcon>
            {/* <Pressable
              style={{
                marginTop: "5%",
                backgroundColor: registerType == 1 ? "#b243da" : "#fff",
                borderColor: registerType == 2 ? "#b243da" : "#fff",
                borderWidth: 3,
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                width: "40%",
                height: 70,
                justifyContent: "center",
              }}
              onPress={() => setRegisterType(1)}
            >
              <Feather
                name="user"
                size={24}
                style={{ color: registerType == 2 ? "#b243da" : "#fff" }}
              />
              <Text
                style={{
                  color: registerType == 2 ? "#b243da" : "#fff",
                  fontWeight: "600",
                  fontSize: width / 32,
                }}
              >
                Soy una Persona{"  "}
              </Text>
            </Pressable> */}
            <Pressable
              style={{
                marginTop: "5%",
                backgroundColor: registerType == 2 ? "#b243da" : "#fff",
                borderColor: registerType == 1 ? "#b243da" : "#fff",
                borderWidth: 3,
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                width: "40%",
                height: 70,
                justifyContent: "center",
                marginLeft: "5%",
              }}
              onPress={() => setRegisterType(2)}
            >
              <Feather
                name="users"
                size={24}
                style={{ color: registerType == 1 ? "#b243da" : "#fff" }}
              />
              <Text
                style={{
                  color: registerType == 1 ? "#b243da" : "#fff",
                  fontWeight: "600",
                  fontSize: width / 32,
                }}
              >
                Soy un comercio{"  "}
              </Text>
            </Pressable>
          </View>
          <View style={{ width: "90%", marginTop: "5%" }}>
            {registerType != 2 ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "bold",
                    fontSize: width / 15,
                  }}
                >
                  Personas
                </Text>
                <Text
                  style={{
                    color: "#9299fa",
                    fontWeight: "900",
                    fontSize: width / 18,
                  }}
                >
                  ¿Que necesitas?
                </Text>
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "800",
                    fontSize: width / 28,
                  }}
                >
                  Solo necesitas tu documento de identidad
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "bold",
                    fontSize: width / 15,
                  }}
                >
                  Comercios
                </Text>
                <Text
                  style={{
                    color: "#9299fa",
                    fontWeight: "900",
                    fontSize: width / 18,
                  }}
                >
                  ¿Que necesitas?
                </Text>
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "800",
                    fontSize: width / 28,
                  }}
                >
                  * Número de RIF
                </Text>
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "800",
                    fontSize: width / 28,
                  }}
                >
                  * Razón Social
                </Text>
                <Text
                  style={{
                    color: "#b243da",
                    fontWeight: "800",
                    fontSize: width / 28,
                  }}
                >
                  * Persona de Conctacto
                </Text>
                <Text
                  style={{
                    color: "#9299fa",
                    fontWeight: "bold",
                    fontSize: width / 28,
                    marginTop: 5,
                    textAlign: "right",
                  }}
                >
                  Un ejecutivo te contactara vía correo electrónico te
                  contactara para completar tu expediente
                </Text>
              </View>
            )}
          </View>
          <View style={{ width: "80%", position: "absolute", bottom: "5%" }}>
            <Pressable
              onPress={() =>
                registerType == 1
                  ? navigation.navigate("userStepOne")
                  : navigation.navigate("bissStepOne")
              }
            >
              <LinearGradient
                // Background Linear Gradient
                colors={["#fb07f6", "#00d4ff"]}
                style={{
                  alignItems: "center",
                  borderRadius: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                start={{ x: 1.5, y: -3 }}
                end={{ x: -3, y: 1.5 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  Empecemos
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
