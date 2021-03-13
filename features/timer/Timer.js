import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import CountDown from '../../components/countdown/countdown.component';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import { ProgressBar } from 'react-native-paper';
import Timing from './Timing';

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
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const Timer = ({ focusSubject }) => {
    const [minutes, setMinutes] = useState(0.1);
    const [isStarted, setIsStarted] = useState(null);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress);
    }

    const onChangeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    } 

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                {/* Atenção - 
                As props do componente devem refletir os casos de uso dele e não do componente que o chama (componente pai), 
                por isso usamos isStarted no compoenente pai e isPaused no componente filho */}
                <CountDown 
                    minutes={minutes}
                    isPause={!isStarted}
                    onProgress={onProgress} />
            </View>
            <View style={{ paddingTop: spacing.xxxl }}>
                <Text style={styles.title}> Focusing on: </Text>
                <Text style={styles.task}> {focusSubject} </Text>
            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar
                    progress={progress}
                    color={colors.lightPurple}
                    style={{ height: 10 }}
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