import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import Entertainment from './screens/Entertainment';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Entertainment">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Entertainment" component={Entertainment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
