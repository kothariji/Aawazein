import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';


const Loader = () => {
  return (
    <View style={styles.screenLayout}>
      <Spinner color="#E61A06" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
