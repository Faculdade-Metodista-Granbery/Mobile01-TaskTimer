import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)'
    }
})

const CountDown = ({ minutes = 20, isPause, }) => {

    const [milis, setMilis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(milis / 1000 / 60) % 60;
    const seconds = Math.floor(milis / 1000) %60;

    return(
    <Text style={styles.text}> {formatTime(minute)}:{formatTime(seconds)} </Text>
    )
}

export default CountDown;