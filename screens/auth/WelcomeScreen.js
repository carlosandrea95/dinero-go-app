import React, { Component } from "react";
import { View, Text, Pressable, Image } from "react-native";
import customStyles from "../../styles/auth/WelcomeStyles";
import baseStyles from "../../styles/baseStyles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={customStyles.screenHeight}>
      <StatusBar style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#fb07f6", "#00d4ff"]}
        style={{ height: "100%" }}
        start={{ x: 2, y: 0 }}
        end={{ x: 0, y: 2 }}
      >
        <View style={{ alignItems: "center", height: "50%" }}>
          <Image
            source={require("../../assets/dinero-go.png")}
            resizeMode="contain"
            style={customStyles.logo}
          />
        </View>
        <Text style={customStyles.welcomeText}>Bienvenido</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={customStyles.captionSmall}>
            Envia, Recibe y Paga con Dinero GO
          </Text>
          <Text style={customStyles.captionBigger}>
            La forma mas fácil y rapida de enviar dinero online
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={baseStyles.btnWhite}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={baseStyles.btnText}>Crear una cuenta</Text>
          </Pressable>
          <Pressable
            style={{
              width: "90%",
              alignItems: "center",
              marginTop: "5%",
            }}
            onPress={() => navigation.navigate("login")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "300",
              }}
            >
              ¿Ya tiene una cuenta?
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {""} Iniciar Sesión
              </Text>
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}
