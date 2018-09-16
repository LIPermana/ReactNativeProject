import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component {
	render(){
		return(
			<Text style = {salon.judul}>{this.props.judul}</Text>
		);
	}
}
const salon = {
	judul: {
		color: '#2d2d2d',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop:0,
		paddingLeft: 100,
		paddingRight: 100,
		backgroundColor: '#ffff00'
	}
}
export default Judul;
