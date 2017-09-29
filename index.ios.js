/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class PlatziMusic extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.blue]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  marginBottom10:{
    marginBottom: 10
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red'
  },
  blue: {
    backgroundColor: 'blue'
  },
  green: {
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
