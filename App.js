/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
    for view:
    <Text style={styles.instructions}>{instructions}</Text>
    for stylesheet:
    instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});*/

type props = {};
export default class App extends Component<props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Nama   : Lulu Irman Permana</Text>
          <Text style={styles.welcome}>Kelas    : XI RPL 1</Text>
          <Text style={styles.welcome}>No         : 18</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
  welcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'left',
    margin: 10,
  },
});
