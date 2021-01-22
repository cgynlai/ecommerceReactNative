/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
//import Route from './app/routes';
import Products from './app/pages/Products';
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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          
          <Products />
        </Provider>
      </NavigationContainer>
    )
  }
}

