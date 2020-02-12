import { observable, action, decorate } from 'mobx';
import Axios from 'axios';

class anasayfaC {
    splashGoster = true;

    splashKapat = () => (setTimeout(() => (this.splashGoster = false), 750));

    sayfa = 0;
    sayfaDegisti = d => (this.sayfa = d);

    anasayfaPagesRef = null;
    setAnasayfaPagesRef = d => (this.anasayfaPagesRef = d);
    sayfayaGit = d => (this.anasayfaPagesRef.scrollToPage(d));


    mesajlasmalar = [
        {
            id: 0,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 1',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 1,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 2',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 2,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 3',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 3,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 4',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 4,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 5',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 5,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 6',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 6,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 7',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        },
        {
            id: 7,
            profil: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png',
            baslik: 'Mesajlaşma Başlığı 8',
            sonMesaj: 'Merhaba nasılsın?',
            tarih: '24.01.20',
        }
    ];
}


decorate(
    anasayfaC,
    {
        splashGoster: observable,
        splashKapat: action,


        sayfa: observable,
        sayfaDegisti: action,

        anasayfaPagesRef: observable,
        setAnasayfaPagesRef: action,
        sayfayaGit: action,

        mesajlasmalar: observable,
    }
);

export default new anasayfaC();
