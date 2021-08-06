import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Entertainment = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>Entertainment News Will come Here</Text>
      <Text>Entertainment News Will come Here</Text>
      <Text>Entertainment News Will come Here</Text>
      <Text>Entertainment News Will come Here</Text>
      <Text>Entertainment News Will come Here</Text>
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

export default Entertainment;
