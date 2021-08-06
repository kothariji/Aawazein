import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.homeScreen}>
      <Text>Latest News Will come Here</Text>
      <Text>Latest News Will come Here</Text>
      <Text>Latest News Will come Here</Text>
      <Text>Latest News Will come Here</Text>
      <Text>Latest News Will come Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
