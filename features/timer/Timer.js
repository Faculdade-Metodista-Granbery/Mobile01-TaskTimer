import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

const Timer = ({ focusSubject }) => {

    return(
        <View style={styles.container}>
            <View style={{ paddingTop: spacing.xxxxl }}>
                <Text style={styles.title}> Focusing on: </Text>
                <Text style={styles.task}> { focusSubject } </Text>
            </View>
        </View>
    )
}

export default Timer;