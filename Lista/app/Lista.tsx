import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { db } from "../database";

export default function Lista() {
  const [contatos, setContatos] = useState([]);

  function carregarContatos() {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM contatos;",
        [],
        (_, { rows }) => setContatos(rows._array),
        (_, error) => console.log(error)
      );
    });
  }

  function deletarContato(id) {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM contatos WHERE id = ?;",
        [id],
        () => carregarContatos(),
        (_, error) => console.log(error)
      );
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carregarContatos(); 
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Telefônica</Text>

      <FlatList
        data={contatos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.numero}>{item.numero}</Text>
            </View>

            <TouchableOpacity
              onPress={() => deletarContato(item.id)}
              style={styles.botaoDeletar}
            >
              <Text style={styles.botaoDeletarTexto}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:"#f2f2f2"},
  title:{fontSize:24,fontWeight:"bold",textAlign:"center",marginBottom:20},
  card:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:15,borderRadius:10,marginBottom:10,borderWidth:1,borderColor:"#ddd"},
  nome:{fontSize:18,fontWeight:"600"},
  numero:{fontSize:16,color:"#555"},
  botaoDeletar:{backgroundColor:"red",padding:10,borderRadius:8},
  botaoDeletarTexto:{color:"white",fontWeight:"bold"}
});
