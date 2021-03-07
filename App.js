import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CustomButton from './components/custom-button/custom-button.component';

export default function App() {

  const handlePress = () => {
    console.log('Helloooooooooooo beautiful world!!!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
      <Button 
        color={'black'} 
        title="Clica em mim" 
        onPress={handlePress}
        />
      <CustomButton 
        title='Clica Aqui'
        onPress={handlePress}
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
  },
});
