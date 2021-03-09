import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../../components/rounded-button/rounded-button.component';

const Focus = () => {
    const [focusSubject, setFocusSubject] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Não posso procrastinar para?! </Text>
                <View style={styles.inputContainer}>
                    <TextInput />
                    <RoundedButton size={50} title="+"/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center'  
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    inputContainer: {
        paddingTop: 20
    }
})

export default Focus;