import * as React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ThemeProvider} from '../assets/ThemeContext';
import Home from '../screens/home/home';
import Search from '../screens/search/search';
import Profile from '../screens/profile/profile';
import Forum from '../screens/forum/forum';
import Chats from '../screens/chats/chats';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <GestureHandlerRootView>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false, animation: 'none'}}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{headerShown: false, animation: 'none'}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false, animation: 'none'}}
              />
              <Stack.Screen
                name="Forum"
                component={Forum}
                options={{headerShown: false, animation: 'none'}}
              />
              <Stack.Screen
                name="Chats"
                component={Chats}
                options={{headerShown: false, animation: 'none'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    // </TouchableWithoutFeedback>
  );
};

export default Routes;
