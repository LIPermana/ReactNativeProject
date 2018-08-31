import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return(
			<Text style = {salon.judul}>BIODATA</Text>
		)
	}
}
const salon = {
	judul: {
		color: '#2d2d2d',
		fontSize: 50,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop:50,
		paddingLeft: 77,
		paddingRight: 77,
		backgroundColor: '#ffff00'
	}
}
export default Judul;