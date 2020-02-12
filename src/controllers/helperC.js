import { observable, action, decorate } from 'mobx';
import Axios from 'axios';
import { Dimensions } from 'react-native';

class helperC {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;
}

decorate(
    helperC,
    {
        w: observable,
        h: observable
    }
);

export default new helperC();
