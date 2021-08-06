import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryWiseNews = () => {
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

export default CategoryWiseNews;
