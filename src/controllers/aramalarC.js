import { observable, action, decorate } from 'mobx';
import Axios from 'axios';

class aramalarC {
    page = 2;
    sayfachanged = d1 => (this.page = d);

    aramaSayfaRef = null;
    setAramaSayfaRef = d1 => (this.aramaSayfaRef = d1);
    goToSayfa = d1 => (this.aramaSayfaRef.scrollToPage(d1));

    aramalar = [
        {
            id: 0,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 1',
            tarih: '24.01.20',
        },
        {
            id: 1,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 2',
            tarih: '24.01.20',
        },
        {
            id: 2,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 3',
            tarih: '24.01.20',
        },
        {
            id: 3,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 4',
            tarih: '24.01.20',
        },
        {
            id: 4,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 5',
            tarih: '24.01.20',
        },
        {
            id: 5,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Arama Başlığı 6',
            tarih: '24.01.20',
        }
    ];
}
decorate(
    aramalarC,
    {
        page: observable,
        sayfachanged: action,

        aramaSayfaRef: observable,
        setAramaSayfaRef: action,
        goToSayfa: action,

        aramalar: observable,
    }
);

export default new aramalarC();

