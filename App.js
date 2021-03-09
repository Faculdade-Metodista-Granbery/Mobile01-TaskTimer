import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Focus from './features/focus/Focus';

export default function App() {

  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      { focusSubject ? (
        <Text> Meu foco agora é! </Text>
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
    backgroundColor: '#baa697'
  },
});
