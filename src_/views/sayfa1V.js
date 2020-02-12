import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { observer } from 'mobx-react';


import sayfa1S from '../styles/sayfa1S';


import sayfa1C from '../controllers/sayfa1C';
import helper from '../controllers/helper';

class sayfa1V extends React.Component {
	componentWillMount() {
		helper.getDbData();
	}
	render() {
		return (
			<View style={sayfa1S.kapsayici}>
				<Text style={sayfa1S.baslik}>{helper.basliklar[0]}</Text>

				<TouchableOpacity style={sayfa1S.buton} onPress={() => helper.setBaslik('test', 0)}>
					<Text>Başlık Değiştir</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => this.props.navigation.goBack()}>
					<Text style={sayfa1S.butonYazi}>Geri</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => this.props.navigation.navigate('sayfa1')}>
					<Text style={sayfa1S.butonYazi}>SAYFA 1'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => this.props.navigation.navigate('s2', { baslik: 'ben sayfa 1 den geldim' })}>
					<Text style={sayfa1S.butonYazi}>SAYFA 2'YE GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => this.props.navigation.navigate('s3')}>
					<Text style={sayfa1S.butonYazi}>SAYFA 3'E GİT</Text>
				</TouchableOpacity>


				<TouchableOpacity style={sayfa1S.buton} onPress={() => this.props.navigation.navigate('s4')}>
					<Text style={sayfa1S.butonYazi}>SAYFA 4'E GİT</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default observer(sayfa1V);
