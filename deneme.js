import React from 'react';
import { View, Text } from 'react-native';
import Navigasyon from './src/navigasyon';

class deneme extends React.Component {
    state = {};

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>header</Text>
                <View style={{ flex: 1 }}>
                    <Navigasyon />
                </View>
                <Text>Footer</Text>
            </View>
        );
    }
}

export default deneme; 
