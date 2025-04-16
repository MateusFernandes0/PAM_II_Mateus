import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style = {estilos.pagina}>
      <Text style = {estilos.titulo}>Login</Text>
    <View style = {estilos.caixa}>
      <TextInput placeholder="Usuário" style = {estilos.texto} />
      <TextInput placeholder="Senha" style = {estilos.texto} />
    </View>
      <Link href = "/home" asChild>
        <TouchableOpacity style = {estilos.botao}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const estilos = StyleSheet.create ({
  pagina: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },

  titulo: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
  },

  caixa: {
    width: "15%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },

  texto: {
    width: 250,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: "gray",
    color: "white",
  }
})