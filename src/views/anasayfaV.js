import React from 'react';
import { View, ScrollView, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import SImage from 'react-native-scalable-image';
import { Pages } from 'react-native-pages';

import { anasayfaS, splashS, ustBarS, isimlerAlaniS, mesajlasmaS } from '../styles/anasayfaS';

import helperC from '../controllers/helperC';
import anasayfaC from '../controllers/anasayfaC';
import aramalarC from '../controllers/aramalarC';
import { aramalarS } from '../styles/aramalarS';


class anasayfaV extends React.Component {
	componentDidMount() {
		anasayfaC.splashKapat();
	}


	renderSplashEkrani() {
		return (
			<View style={splashS.kapsayici}>
				<StatusBar backgroundColor={'rgba(33,38,44,1)'} />

				<SImage source={require('../images/splash2.png')} width={helperC.w * 0.18} style={splashS.whIkon} />
				<SImage source={require('../images/splash1.png')} width={helperC.w * 0.3} style={splashS.fromFacebook} />
			</View>
		);
	}
	renderUstBar() {
		return (
			<View style={ustBarS.ustBar}>
				<SImage source={require('../images/whatsapp.png')} width={helperC.w * 0.3} />

				<View style={ustBarS.ustBarSagIkonlar}>
					<TouchableOpacity style={ustBarS.ustArama}>
						<SImage source={require('../images/arama.png')} height={40} />
					</TouchableOpacity>

					<TouchableOpacity style={ustBarS.ustBar3Nokta}>
						<SImage source={require('../images/3nokta.png')} height={32} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	renderSayfaIsimleri() {
		return (
			<View style={isimlerAlaniS.isimlerAlani}>
				<SImage source={require('../images/kameraIkon.png')} height={20} style={isimlerAlaniS.isimlerAlaniKameraIkon} />
				<Text
					onPress={() => { anasayfaC.sayfayaGit(0); }}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 0 && isimlerAlaniS.isimYaziAktif]}
				>
					SOHBETLER
				</Text>
				<Text
					onPress={() => anasayfaC.sayfayaGit(1)}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 1 && isimlerAlaniS.isimYaziAktif]}
				>
					DURUM
				</Text>
				<Text
					onPress={() => anasayfaC.sayfayaGit(2)}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 2 && isimlerAlaniS.isimYaziAktif]}
				>
					ARAMALAR
				</Text>
			</View>
		);
	}


	renderSOHBETLER() {
		return (
			<View style={anasayfaS.govde}>
				<FlatList
					data={anasayfaC.mesajlasmalar}
					renderItem={d => this.renderMesajlasma(d.item)}
				/>
			</View>
		);
	}
	renderDURUM() {
		return (
			<View style={anasayfaS.govde}>
				<Text>renderDURUMLAR</Text>
			</View>
		);
	}
	renderARAMALAR() {
		return (
			<View style={anasayfaS.govde}>
				<FlatList
					data={aramalarC.aramalar}
					renderItem={d => this.renderArama(d.item)}
				/>
			</View>
		);
	}


	renderMesajlasma(d) {
		return (
			<View style={mesajlasmaS.kapsayici}>
				<SImage
					width={helperC.w * 0.12}
					source={{ uri: d.profil }}
					style={mesajlasmaS.profilResmi}
				/>

				<TouchableOpacity
					style={mesajlasmaS.sagdakiAlan}
					onPress={() => this.props.navigation.navigate('mesajlasma')}
				>
					<View style={mesajlasmaS.baslikAlani}>
						<Text numberOfLines={1} style={mesajlasmaS.mesajBaslik}>{d.baslik}</Text>
						<Text style={mesajlasmaS.tarih}>{d.tarih}</Text>
					</View>
					<Text numberOfLines={1} style={mesajlasmaS.sonMesajYazi}>{d.sonMesaj}</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderArama(d) {
		return (
			<View style={aramalarS.container}>
				<SImage
					width={helperC.w * 0.12}
					source={{ uri: d.profil }}
					style={aramalarS.profilResmi}
				/>

				<TouchableOpacity
					style={aramalarS.sagdakiAlan}
					onPress={() => this.props.navigation.navigate('arama')}
				>
					<View style={aramalarS.baslikAlani}>
						<Text numberOfLines={1} style={aramalarS.aramaBaslik}>{d.baslik}</Text>
						<Text style={aramalarS.tarih}>{d.tarih}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={aramalarS.callfunc}>
					<SImage source={require('../images/call.png')} width={helperC.w * 0.05} />
				</TouchableOpacity>
			</View>
		);
	}


	render() {
		if (anasayfaC.splashGoster) return this.renderSplashEkrani();

		return (
			<View style={anasayfaS.kapsayici}>
				<StatusBar backgroundColor={'#054c44'} />

				{this.renderUstBar()}
				{this.renderSayfaIsimleri()}


				<Pages
					ref={anasayfaC.setAnasayfaPagesRef} //this.refs.anasayfaPages
					//ref={anasayfaC.setAnasayfaPagesRef()} //this.anasayfaPages
					indicatorColor={'transparent'}
					onScrollEnd={anasayfaC.sayfaDegisti}
					containerStyle={anasayfaS.pagesContainerStyle}
				>
					{this.renderSOHBETLER()}
					{this.renderDURUM()}
					{this.renderARAMALAR()}
				</Pages>


				<TouchableOpacity style={anasayfaS.yeniMesajIkon}>
					<SImage source={require('../images/yeniMesaj.png')} width={helperC.w * 0.12} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default observer(anasayfaV);
