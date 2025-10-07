import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native/types_generated/index';
import { drivers } from './data/drivers';

export default function App() {
  //var driver = drivers[3];
  const[driver, setDriver] = useState(drivers[0])
  
  const changeDriver = () =>
  {
    setDriver(drivers[5]);
      console.log(driver);
  }
  return (
    <View style={styles.container}>
      <Text>EUNICE</Text>
      <Image 
      style ={styles.image}
      source={{uri: driver.image}}/>
      <Button 
      title = 'Trocar piloto'
      onPress={changeDriver}/>
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
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 16
  }
});
