import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigator from './SRC/Navigation/MainNavigator';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './SRC/Navigation/SplashScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={{backgroundStyle}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}></StatusBar>
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;
