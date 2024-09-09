import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ThemeProvider } from '../assets/ThemeContext';
import Home from '../screens/home/home';
import Search from '../screens/search/search';
import Chats from '../screens/chats/chats';
import Profile from '../screens/profile/profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    // Envolver o NavigationContainer com o ThemeProvider
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Search" component={Search}></Stack.Screen>
          <Stack.Screen name="Chats" component={Chats}></Stack.Screen>
          <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
