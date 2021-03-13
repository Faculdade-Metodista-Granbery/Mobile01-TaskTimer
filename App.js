import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import Focus from './features/focus/Focus';
import Timer from './features/timer/Timer';

import { colors } from './utils/colors';
import { spacing } from './utils/sizes';

export default function App() {

  const [focusSubject, setFocusSubject] = useState('studding');

  return (
    <View style={styles.container}>
      { focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (<Focus
        addSubject={setFocusSubject}
      />)}
      { focusSubject }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkGray
  },
});
