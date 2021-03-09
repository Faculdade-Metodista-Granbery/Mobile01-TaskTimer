import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...otherProps
}) => {

    return(
        <TouchableOpacity style={[styles(size).radius, style, ]}>
            <Text style={[styles(size).textStyle, textStyle]}>{ otherProps.title }</Text>
        </TouchableOpacity>
    )

}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
    },
    textStyle: {
        color: 'white',
        fontSize: size / 3,

    }
})

export default RoundedButton;