/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

type props = {};
export default class App extends Component<props> {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <View >
          <Text style={styles.welcome}>Nama   :  Lulu Irman Permana</Text>
          <Text style={styles.welcome}>Kelas    :  XI RPL 1</Text>
          <Text style={styles.welcome}>No         :  18</Text>   
        </View> 
        <Image 
            source={require('./src/img/Me.jpg')}
            style={{height: 400, width: 200}}
            resizeMode="contain"
          />   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
  },
  welcome: {
    color: '#ffff00',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'left',
    margin: 10,
    marginBottom: 0
  },
});
