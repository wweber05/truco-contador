import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

 function diminuirNos() {
    if (pontosNos > 0) setPontosNos(pontosNos - 1);
  }

  function diminuirEles() {
    if (pontosEles > 0) setPontosEles(pontosEles - 1);
  }

return (
    <View style={styles.container}>
      <Text style={styles.title}>MARCADOR</Text>

    
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 50 }}>
        
        
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.teamLabel}>Nós</Text>
          <Text style={styles.text}>{pontosNos}</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => setPontosNos(pontosNos + 1)}
              style={[styles.button, { backgroundColor: '#006442' }]}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={diminuirNos}
              style={[styles.button, { backgroundColor: '#8B0021' }]}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

      
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.teamLabel}>Eles</Text>
          <Text style={styles.text}>{pontosEles}</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => setPontosEles(pontosEles + 1)}
              style={[styles.button, { backgroundColor: '#006442' }]}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={diminuirEles}
              style={[styles.button, { backgroundColor: '#8B0021' }]}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  text: {
    fontSize: 80, // Diminuí um pouco para caber os dois na tela
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row', 
    gap: 10, 
    marginTop: 20
  },
  button: {
    width: 70,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold'
  }
});

  