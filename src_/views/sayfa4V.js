import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import sayfa4S from '../styles/sayfa4S';
import helper from '../controllers/helper';


class sayfa4V extends React.Component {
	render() {
		return (
			<View style={sayfa4S.kapsayici}>
				<Text style={sayfa4S.baslik}>{helper.basliklar[0]}</Text>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => helper.setBaslik('test', 0)}>
					<Text>Başlık Değiştir</Text>
				</TouchableOpacity>

				<TouchableOpacity style={sayfa4S.buton} onPress={() => this.props.navigation.goBack()}>
					<Text style={sayfa4S.butonYazi}>Geri</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa4S.buton} onPress={() => this.props.navigation.navigate('sayfa1')}>
					<Text style={sayfa4S.butonYazi}>SAYFA 1'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa4S.buton} onPress={() => this.props.navigation.navigate('s2')}>
					<Text style={sayfa4S.butonYazi}>SAYFA 2'YE GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa4S.buton} onPress={() => this.props.navigation.navigate('s3')}>
					<Text style={sayfa4S.butonYazi}>SAYFA 3'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa4S.buton} onPress={() => this.props.navigation.navigate('s4')}>
					<Text style={sayfa4S.butonYazi}>SAYFA 4'E GİT</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default sayfa4V;
