import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import CountDown from '../../components/countdown/countdown.component';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import { ProgressBar } from 'react-native-paper';
import Timing from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: spacing.md,
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: spacing.md,
    },
    countDown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const DEFAULT_TIME = 0.1;

const Timer = ({ focusSubject, onTimerEnd }) => {

    useKeepAwake();

    const [minutes, setMinutes] = useState(DEFAULT_TIME);
    const [isStarted, setIsStarted] = useState(null);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress);
    };

    const onChangeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    };

    const vibrate = () => {
        if(Platform.OS === 'ios'){
            const interval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearImmediate(interval), 1000);
        } else {
            Vibration.vibrate(1000);
        }
    };

    const onEnd = () => {
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
        onTimerEnd();
    };

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                {/* Atenção - 
                As props do componente devem refletir os casos de uso dele e não do componente que o chama (componente pai), 
                por isso usamos isStarted no compoenente pai e isPaused no componente filho */}
                <CountDown 
                    minutes={minutes}
                    isPause={!isStarted}
                    onProgress={onProgress}
                    onEnd={onEnd}
                    />
            </View>
            <View style={{ paddingTop: spacing.xxxl }}>
                <Text style={styles.title}> Focado em: </Text>
                <Text style={styles.task}> {focusSubject} </Text>
            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar
                    progress={progress}
                    color={colors.lightPurple}
                    style={{ height: 20, borderRadius: 20, margin: spacing.sm }}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={onChangeTime}/>
            </View>
            <View style={styles.buttonWrapper}>
                {isStarted ?
                    (<RoundedButton
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    />)
                    :
                    (<RoundedButton
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />)
                }
            </View>
        </View>
    )
}

export default Timer;