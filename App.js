import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Judul judul="BIODATA"/>
          <Judul judul="HANYA UNTUK"/>
          <Judul judul="PRIBADI"/>
        </View>
        <View style={{margin: 0}}>
          <Text style={styles.welcome}>Nama   :  Lulu Irman Permana</Text>
          <Text style={styles.welcome}>Kelas    :  XI RPL 1</Text>
          <Text style={styles.welcome}>No         :  18</Text>
        </View>
        <View style={{margin: 0, padding: 0}}>
          <Image
              source={require('./src/img/Me.jpg')}
              style={{height: 380, width: 180}}
              resizeMode="contain"
            />
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
