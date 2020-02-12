import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import sayfa1 from './views/sayfa1V';
import sayfa2 from './views/sayfa2V';
import sayfa3 from './views/sayfa3V';
import sayfa4 from './views/sayfa4V';


const ayarlar = {
	header: null
};


const sayfalar = createStackNavigator({
	sayfa1: { screen: sayfa1, navigationOptions: ayarlar },
	s2: { screen: sayfa2, navigationOptions: ayarlar },
	s3: { screen: sayfa3, navigationOptions: ayarlar },
	s4: { screen: sayfa4, navigationOptions: ayarlar },
});


export default createAppContainer(sayfalar);
