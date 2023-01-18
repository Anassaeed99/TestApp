import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import React from 'react';
import {View, Text} from 'react-native';
import App from '../../App';
const Stack = createStackNavigator();
const MainNavigator = () => {
  //   const SplashScreen = () => {
  //     return (
  //       <View>
  //         <Text>SplashScreen</Text>
  //       </View>
  //     );
  //   };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          screenOptions={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
