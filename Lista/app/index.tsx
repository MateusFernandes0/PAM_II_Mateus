import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import { useEffect } from "react";
import { initDB } from "../database";

export default function Home() {

  useEffect(() => {
    initDB(); // cria tabela ao abrir app
  }, []);

  return (
    <View style={styles.container}>
      
      <Link href="/Lista" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lista telefônica</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/adicionar" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Número</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#f2f2f2"},
  button:{backgroundColor:'#37B6FF',width:300,paddingVertical:15,borderRadius:50,alignItems:'center',marginVertical:10},
  buttonText:{color:'#fff',fontSize:18,fontWeight:'bold'}
});
