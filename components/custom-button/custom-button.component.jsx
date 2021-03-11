import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
      }
})

const CustomButton = ({ title, ...otherProps }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            { ...otherProps }
        >
            <Text style={{ color: 'white' }}> {title} </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;