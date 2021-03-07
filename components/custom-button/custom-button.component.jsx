import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: '18px',
        fontFamily: 'Open Sans',
        fontWeight: 'bolder',
    },
    button: {
        alignItems: 'center',
        width: 'auto',
        height: '50px',
        padding: '10px',
        backgroundColor: '#4285f4',
    }
})

const CustomButton = ({ title, ...otherProps }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            {...otherProps}
        >
            <Text style={{ color: 'white', fontSize: '18px', fontFamily: 'Open Sans', fontWeight: 'bolder' }}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;