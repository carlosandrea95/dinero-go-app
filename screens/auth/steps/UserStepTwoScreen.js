import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import StackHeader from "../../../components/StackHeader";
import baseStyles from "../../../styles/baseStyles";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export default function UserStepTwoScreen(props) {
  const { width, height } = Dimensions.get("window");
  return (
    <View height={height}>
      <StackHeader title={"Registro"} navigate="userStepOne" />
      <View style={baseStyles.appContainer}>
        <ScrollView style={baseStyles.formContainer}>
          <Text style={baseStyles.labelGroup}>
            Datos para ingresar a tu cuenta
          </Text>
          <Text style={baseStyles.label}>Usuario</Text>
          <TextInput
            style={baseStyles.textInput}
            placeholder="Usuario"
          ></TextInput>
          <Text style={baseStyles.label}>Contraseña</Text>
          <TextInput
            style={baseStyles.textInput}
            placeholder="Contraseña"
          ></TextInput>
          <Text style={baseStyles.label}>Repetir Contraseña</Text>
          <TextInput
            style={baseStyles.textInput}
            placeholder="Repetir Contraseña"
          ></TextInput>
          <Text style={baseStyles.labelGroup}>
            Datos para autorizar operaciones
          </Text>
          <Text style={baseStyles.label}>PIN</Text>
          <TextInput style={baseStyles.textInput} placeholder="PIN"></TextInput>
          <Text style={baseStyles.label}>Confirmar PIN</Text>
          <TextInput
            style={baseStyles.textInput}
            placeholder="Confirmar PIN"
          ></TextInput>
          <Text style={baseStyles.label}>Telefono Movil</Text>
          <TextInput
            style={baseStyles.textInput}
            placeholder="Telefono Movil"
          ></TextInput>
        </ScrollView>
        <View style={{ marginTop: "2.5%", width: "80%", marginBottom: "2.5%" }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <AntDesign
              name="checkcircle"
              size={18}
              color="#b243da"
              style={{ marginRight: 10 }}
            />
            <AntDesign name="checkcircle" size={18} color="#b243da" />
          </View>
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
                Siguiente
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
