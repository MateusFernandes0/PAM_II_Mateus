import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

// Definindo a interface para o tipo de dados da coleção 'Nomes'
interface Nome {
  id: string;
  Nome: string;
  Sobrenome: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyD1GrTVsTNq5-NGB55_jgyXiY8zZfHtULw",
  authDomain: "meu-primeiro-firebase-3717a.firebaseapp.com",
  projectId: "meu-primeiro-firebase-3717a",
  storageBucket: "meu-primeiro-firebase-3717a.firebasestorage.app",
  messagingSenderId: "984102445785",
  appId: "1:984102445785:web:04280ff3661f9f32ed14c8"
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  // Usando o tipo Nome para os itens na lista
  const [nomes, setNomes] = useState<Nome[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomeCollection = firebase.firestore().collection("Nomes");
      const snapshot = await nomeCollection.get();

      const data: Nome[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Nome);
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
