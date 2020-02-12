import { observable, action, decorate } from 'mobx';
import Axios from 'axios';

class helper {
    basliklar = ['MERHABA', 'MERHABA', 'MERHABA', 'MERHABA'];
    setBaslik = (d, i) => (this.basliklar[i] = d);
    /*
    setBaslik = (d) => {
        this.baslik = d;
    }
    */

    getDbData = () => {
        const gidenVeri = new FormData();
        gidenVeri.append('veri1', 'test');
        gidenVeri.append('veri2', 'test');
        gidenVeri.append('veri3', 'test');
        gidenVeri.append('veri4', 'test');
        alert(JSON.stringify(gidenVeri));

        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(gelenVeri => {
                alert(JSON.stringify(gelenVeri));
            })
            .catch(e => alert(e));
    }
}

decorate(
    helper,
    {
        basliklar: observable,
        setBaslik: action,
        getDbData: action
    }
);

export default new helper();
