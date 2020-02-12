import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	kapsayici: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buton: {
		backgroundColor: 'orange',
		padding: 10,
		margin: 5,
		borderRadius: 5,
	},
	butonYazi: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 15
	},

	baslik: {
		fontSize: 20,
		position: 'absolute',
		top: 10,
		width: '100%',
		textAlign: 'center'
	}
});
