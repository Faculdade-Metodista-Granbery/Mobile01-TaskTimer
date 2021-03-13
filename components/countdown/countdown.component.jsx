import React, { useState, useEffect, useRef } from 'react';
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

const CountDown = ({ minutes = 1, isPause, onProgress }) => {

    const interval = useRef(null);
    const countDown = () => {
        setMilis((time) => {
            if (time === 0) {
                return time;
            }
            // O tempo decorrido menos um segundo
            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMillis(minutes))
            return timeLeft;
        })
    }

    const [milis, setMilis] = useState(minutesToMillis(minutes));

    // Força a atualização automatica sempre que montar o componente
    useEffect(() => {
        // Se isPause = true não executa o contador
        if (isPause) {
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current)
    }, [isPause])
    // Executa o useEffect sempre que houver alteração em isPause


    const minute = Math.floor(milis / 1000 / 60) % 60;
    const seconds = Math.floor(milis / 1000) %60;

    return(
    <Text style={styles.text}> {formatTime(minute)}:{formatTime(seconds)} </Text>
    )
}

export default CountDown;