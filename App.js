/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  Gallery  from './components/Gallery/Gallery';
import  UploadPhoto  from './components/UploadPhoto/UploadPhoto';


const MainNavigator = createStackNavigator({
    Gallery : {
      screen: Gallery,
      navigationOptions: {
        headerShown: false,
       },
    },
    UploadPhoto : {
      screen: UploadPhoto,
      navigationOptions: {
        headerShown: false,
      },
    }
})
const App = createAppContainer(MainNavigator);


export default App;
