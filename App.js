import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Platform} from 'react-native'; 

import { Tabs, Drawer } from './config/router.js';




export default class App extends React.Component {
  render() {
  	if (Platform.OS === 'ios') {
  		return <Tabs />
  	}

    return <Drawer/>;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
