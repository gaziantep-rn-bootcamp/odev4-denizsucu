import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import sayfa2S from '../styles/sayfa2S';
import helper from '../controllers/helper';


class sayfa2V extends React.Component {

	getirVeri(neGetireyim = 'varsayılan') {
		return this.props.navigation.getParam(neGetireyim);
	}

	render() {
		return (
			<View style={sayfa2S.kapsayici}>
				<Text style={sayfa2S.baslik}>{helper.basliklar[1]}</Text>

				<Text>{this.getirVeri('baslik')}</Text>

				<TouchableOpacity style={sayfa1S.buton} onPress={() => helper.setBaslik('test', 0)}>
					<Text>Başlık Değiştir</Text>
				</TouchableOpacity>

				<TouchableOpacity style={sayfa2S.buton} onPress={() => this.props.navigation.goBack()}>
					<Text style={sayfa2S.butonYazi}>Geri</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa2S.buton} onPress={() => this.props.navigation.navigate('sayfa1')}>
					<Text style={sayfa2S.butonYazi}>SAYFA 1'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa2S.buton} onPress={() => this.props.navigation.navigate('s2')}>
					<Text style={sayfa2S.butonYazi}>SAYFA 2'YE GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa2S.buton} onPress={() => this.props.navigation.navigate('s3')}>
					<Text style={sayfa2S.butonYazi}>SAYFA 3'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa2S.buton} onPress={() => this.props.navigation.navigate('s4')}>
					<Text style={sayfa2S.butonYazi}>SAYFA 4'E GİT</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default sayfa2V;
