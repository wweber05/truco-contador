import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const[contador, setContador] = useState(0);

  function diminuirContagem(){
    if (contador > 0){
    setContador(contador - 1);
    }
    
  }

return (
    <View style={styles.container}>
      <Text style={styles.title}>MARCADOR</Text>
      
      <View>
      <Text style= {styles.text}>{contador}</Text>
      </View>
      
      <View style={{ flexDirection: 'row', marginTop: 200, justifyContent: 'center', gap: 20 }}>
  
  
  <TouchableOpacity 
    onPress={() => setContador(contador + 1)}
    style={{
      backgroundColor: '#006442', 
      width: 80,
      height: 45,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>+</Text>
  </TouchableOpacity>

  
  <TouchableOpacity 
    onPress={diminuirContagem}
    style={{
      backgroundColor: '#8B0021', 
      width: 80,
      height: 45,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>-</Text>
  </TouchableOpacity>

</View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff8f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Arial',
    fontSize: 20
  },

  text: {
    fontSize: 100
  },

})
