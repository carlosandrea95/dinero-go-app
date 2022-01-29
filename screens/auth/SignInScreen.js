import React, { Component } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function SignInScreen({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <StatusBar style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#fb07f6", "#00d4ff"]}
        style={{ height: "25%" }}
        start={{ x: 1.5, y: -3 }}
        end={{ x: -3, y: 1.5 }}
      >
        <Pressable onPress={() => navigation.navigate("welcome")}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={{ marginTop: "10%", marginLeft: "5%" }}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            marginLeft: "5%",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Iniciar Sesión
        </Text>
      </LinearGradient>
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
              fontSize: 36,
            }}
          >
            Bienvenido de nuevo
          </Text>
          <Text
            style={{
              color: "#9299fa",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Hola, ¡Inicie sesión para continuar!
          </Text>
        </View>
        <View style={{ width: "85%", marginTop: "10%" }}>
          <Text
            style={{
              color: "#989898",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Usuario o Correo Electronico
          </Text>
          <TextInput
            style={{
              backgroundColor: "#f2f2f2",
              color: "#b243da",
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
            placeholder="Ingresa tu usuario o correo electronico"
          ></TextInput>
          <Text
            style={{
              color: "#989898",
              fontWeight: "600",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Contraseña
          </Text>
          <TextInput
            style={{
              backgroundColor: "#f2f2f2",
              color: "#b243da",
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
          ></TextInput>
          <Pressable style={{ marginTop: "5%" }}>
            <Text
              style={{
                color: "#b243da",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              ¿Haz olvidado la contraseña?
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginTop: "15%",
              backgroundColor: "#b243da",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={["#fb07f6", "#00d4ff"]}
              style={{
                width: "100%",
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
                Iniciar Sesión
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
        <Pressable
          style={{ marginTop: "20%" }}
          onPress={() => navigation.navigate("register")}
        >
          <Text
            style={{
              color: "#989898",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            ¿no tienes una cuenta?
            <Text
              style={{
                color: "#b243da",
                fontWeight: "600",
              }}
            >
              {" "}
              Regístrate
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
