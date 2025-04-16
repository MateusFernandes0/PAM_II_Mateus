import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style = {estilos.pagina}>
            <Text style = {estilos.titulo}>Bem-vindo</Text>

            <Link href = "/boletim" asChild>
                <TouchableOpacity style = {estilos.botao}>
                    <Text>Boletim</Text>
                </TouchableOpacity>
            </Link>
            <Link href = "/frequencia" asChild>
                <TouchableOpacity style = {estilos.botao}>
                    <Text>Frequência</Text>
                </TouchableOpacity>
            </Link>
    </View>
    )
}

const estilos = StyleSheet.create ({
    pagina: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
    },

    titulo: {
        fontSize: 28,
        marginBottom: 30,
    },

    botao: {
        backgroundColor: "gray",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        width: 200,
        alignItems: "center",
    }
});