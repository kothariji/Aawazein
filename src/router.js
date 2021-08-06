import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CategoryWiseNews from './screens/CategoryWiseNews';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Business" component={CategoryWiseNews} />
        <Drawer.Screen name="Entertainment" component={CategoryWiseNews} />
        <Drawer.Screen name="Health" component={CategoryWiseNews} />
        <Drawer.Screen name="Science" component={CategoryWiseNews} />
        <Drawer.Screen name="Sports" component={CategoryWiseNews} />
        <Drawer.Screen name="Technology" component={CategoryWiseNews} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
