import React from 'react';
import AppContainer from './src/router';
import { NativeBaseProvider } from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
};

export default App;
