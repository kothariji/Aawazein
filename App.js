import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.homepage}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
