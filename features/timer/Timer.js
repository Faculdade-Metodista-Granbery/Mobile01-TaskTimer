import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import CountDown from '../../components/countdown/countdown.component';

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
    },
    countDown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const Timer = ({ focusSubject }) => {

    return(
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown />
            </View>
            <View style={{ paddingTop: spacing.xxxl }}>
                <Text style={styles.title}> Focusing on: </Text>
                <Text style={styles.task}> { focusSubject } </Text>
            </View>
        </View>
    )
}

export default Timer;