import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
   } from 'react-native';
  
const BabyButton = ({ title, color, radius = 10 }) => {

    let buttonColor = '#fd8585';
    let fontColor = 'white';

    if (color === 'blue'){
        buttonColor = '#bae2ff';
        fontColor = '#434343';
    }
    if (color === 'gray'){
        buttonColor = '#a9a9a9';
    }

    return(
        <TouchableOpacity style={styles(buttonColor, radius).button}>
        <Text style={{color: fontColor, fontSize: 20, fontWeight: 'bold', fontFamily: 'Open sans'}}>
          { title }
        </Text>
      </TouchableOpacity>
    )

}

const styles = (color, radius) => StyleSheet.create({
    button: {
      padding: 20,
      minWidth: '120px',
      maxWidth: '120px',
      height: '50px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      borderRadius: radius,
    }
  });
  

export default BabyButton;