import React from "react";
import {
    StyleSheet,
    View,
  } from 'react-native';
import { TextInput } from 'react-native-paper';

import CustomButton from "../../components/custom-button/custom-button.component";

const Focus = () => {

    const handlePress = () => {
        console.log('Helloooooooooooo beautiful world!!!')
      }

    return(
        <View style={styles.container}>
        <TextInput />
        <CustomButton 
          title='Clica Aqui'
          onPress={handlePress}
        />
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Focus;