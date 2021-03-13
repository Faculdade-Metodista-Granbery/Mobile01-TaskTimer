import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors'


const Focus = ({ addSubject }) => {

    const [tempItem, setTempItem] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Não posso procrastinar para?! </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ flex: 1, marginRight: 20 }}
                        onSubmitEditing={({ nativeEvent }) => {
                            setTempItem(nativeEvent.text)
                        }}
                    />
                    <RoundedButton
                        size={50}
                        title="+"
                        onPress={() => {
                            addSubject(tempItem)
                        }}
                    />
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
        padding: spacing.md,
        justifyContent: 'center'
    },
    title: {
        color: colors.lightGray,
        fontWeight: 'bold',
        fontSize: fontSizes.lg,
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Focus;