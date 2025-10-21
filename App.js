import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { drivers } from './data/drivers';

export default function App() {
  const [driver, setDriver] = useState(drivers[0]);

  
  useEffect(() => {
    // Intervalo para trocar o piloto a cada 5 segundos
    const interval = setInterval(() => {
      setDriver(prevDriver => {
        // Pega o índice do piloto atual
        const currentIndex = drivers.findIndex(d => d.id === prevDriver.id);
        // Calcula o próximo índice, voltando ao 0 quando chegar no fim
        const nextIndex = (currentIndex + 1) % drivers.length;
        return drivers[nextIndex];
      });
    }, 5000);

    // Limpa o intervalo quando o componente desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{driver.name}</Text>
      <Image 
        style={styles.image}
        source={{ uri: driver.image }}
      />
      <Text>{driver.description}</Text>
      <Text>Equipe: {driver.team}</Text>
      <Text>País: {driver.country}</Text>
      <Text>Estrelas: {'⭐'.repeat(driver.stars)}</Text>
      <Button 
        title="Trocar Piloto Agora"
        onPress={() => {
          // Troca para o próximo piloto na lista
          const currentIndex = drivers.findIndex(d => d.id === driver.id);
          const nextIndex = (currentIndex + 1) % drivers.length;
          setDriver(drivers[nextIndex]);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginVertical: 16,
  }
});
