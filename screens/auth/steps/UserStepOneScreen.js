import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Picker,
  Pressable,
  TextInput,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import baseStyles from "../../../styles/baseStyles";
import StackHeader from "../../../components/StackHeader";
import RNPickerSelect from "react-native-picker-select";

export default function userSteponeScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = React.useState("v");
  return (
    <View>
      <View style={{ height: "100%" }}>
        <StackHeader title={"Registro"} navigate="register" />
        {/* <StatusBar style="light" />
        <LinearGradient
          colors={["#fb07f6", "#00d4ff"]}
          style={{ height: "25%" }}
          start={{ x: 1.5, y: -3 }}
          end={{ x: -3, y: 1.5 }}
        >
          <Pressable onPress={() => navigation.navigate("register")}>
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
            Registro
          </Text>
        </LinearGradient> */}
        <View style={baseStyles.appContainer}>
          <View style={baseStyles.formContainer}>
            <Text style={baseStyles.labelGroup}>Datos Personales</Text>
            <Text style={baseStyles.label}>Nombre</Text>
            <TextInput
              style={baseStyles.textInput}
              placeholder="Nombre"
            ></TextInput>
            <Text style={baseStyles.label}>Apellido</Text>
            <TextInput
              style={baseStyles.textInput}
              placeholder="Apellido"
            ></TextInput>
            <Text style={baseStyles.label}>Documento de Identidad</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "25%" }}>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: "V", value: "V" },
                    { label: "E", value: "E" },
                  ]}
                  style={(baseStyles.inputIOS, baseStyles.inputAndroid)}
                  doneText="Listo"
                  placeholder={{}}
                />
              </View>
              <TextInput
                style={baseStyles.textInput}
                width="75%"
                placeholder="Documento de Identidad"
                keyboardType="numeric"
              ></TextInput>
            </View>
            <Text style={baseStyles.label}>Correo Electronico</Text>
            <TextInput
              style={baseStyles.textInput}
              placeholder="Correo Electronico"
            ></TextInput>
            <Text style={baseStyles.label}>Repetir Correo Electronico</Text>
            <TextInput
              style={baseStyles.textInput}
              placeholder="Repetir Correo Electronico"
            ></TextInput>
          </View>
          <View style={{ position: "absolute", width: "80%", bottom: "2.5%" }}>
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
              <AntDesign name="checkcircleo" size={18} color="#b243da" />
            </View>
            <Pressable onPress={() => navigation.navigate("userStepTwo")}>
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
    </View>
  );
}
