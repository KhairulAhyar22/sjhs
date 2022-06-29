import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import HomeCore from '../views/page-core/home-core';
import Listclass from '../views/page-core/list-class';
import Kelassatu from '../views/page-core/kelas-satu';
import Kelasdua from '../views/page-core/kelas-dua';
import Kelastiga from '../views/page-core/kelas-tiga';
import Aboutus from '../views/page-core/about-us';

/*mata-pelajaran*/
import Kelassatuipa from '../views/pages-kelas-satu/ipa-kelas-satu';/*kelassatu*/
import Kelassatubahasa from '../views/pages-kelas-satu/bahasa-kelas-satu';
import Kelassatuips from '../views/pages-kelas-satu/ips-kelas-satu';
import Kelassatupkn from '../views/pages-kelas-satu/pkn-kelas-satu';
import Kelasduabahasa from '../views/pages-kelas-dua/bahasa-kelas-dua';/*kelasdua*/
import Kelasduaipa from '../views/pages-kelas-dua/ipa-kelas-dua';
import Kelasduaips from '../views/pages-kelas-dua/ips-kelas-dua';
import Kelasduapkn from '../views/pages-kelas-dua/pkn-kelas-dua';
import Kelastigabahasa from '../views/pages-kelas-tiga/bahasa-kelas-tiga';/*kelastiga*/
import Kelastigaipa from '../views/pages-kelas-tiga/ipa-kelas-tiga';
import Kelastigapkn from '../views/pages-kelas-tiga/pkn-kelas-tiga';

/*import materi kelas satu*/
import Kelas1BahasaBab1 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab1';/*bahasa*/
import Kelas1BahasaBab2 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab2';
import Kelas1BahasaBab3 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab3';
import Kelas1BahasaBab4 from '../views/page-materi/kelas-satu/bahasa/bahasa-bab4';
import Kelas1IpaBab1 from '../views/page-materi/kelas-satu/ipa/ipa-bab1';/*ipa*/
import Kelas1IpaBab2 from '../views/page-materi/kelas-satu/ipa/ipa-bab2';
import Kelas1IpaBab3 from '../views/page-materi/kelas-satu/ipa/ipa-bab3';
import Kelas1IpaBab4 from '../views/page-materi/kelas-satu/ipa/ipa-bab4';
import Kelas1IpsBab1 from '../views/page-materi/kelas-satu/ips/ips-bab1';/*ips*/
import Kelas1IpsBab2 from '../views/page-materi/kelas-satu/ips/ips-bab2';
import Kelas1IpsBab3 from '../views/page-materi/kelas-satu/ips/ips-bab3';
import Kelas1IpsBab4 from '../views/page-materi/kelas-satu/ips/ips-bab4';
import Kelas1PknBab1 from '../views/page-materi/kelas-satu/pkn/pkn-bab1';/*pkn*/
import Kelas1PknBab2 from '../views/page-materi/kelas-satu/pkn/pkn-bab2';
import Kelas1PknBab3 from '../views/page-materi/kelas-satu/pkn/pkn-bab3';
import Kelas1PknBab4 from '../views/page-materi/kelas-satu/pkn/pkn-bab4';

/*import materi kelas2*/
import Kelas2BahasaBab1 from '../views/page-materi/kelas-dua/bahasa/bahasa2-bab1';/*bahasa*/
import Kelas2BahasaBab2 from '../views/page-materi/kelas-dua/bahasa/bahasa2-bab2';
import Kelas2BahasaBab3 from '../views/page-materi/kelas-dua/bahasa/bahasa2-bab3';
import Kelas2BahasaBab4 from '../views/page-materi/kelas-dua/bahasa/bahasa2-bab4';
import Kelas2IpaBab1 from '../views/page-materi/kelas-dua/ipa/ipa2-bab1';/*ipa*/
import Kelas2IpaBab2 from '../views/page-materi/kelas-dua/ipa/ipa2-bab2';
import Kelas2IpaBab3 from '../views/page-materi/kelas-dua/ipa/ipa2-bab3';
import Kelas2IpaBab4 from '../views/page-materi/kelas-dua/ipa/ipa2-bab4';
import Kelas2ipsBab1 from '../views/page-materi/kelas-dua/ips/ips2-bab1';/*ips*/
import Kelas2ipsBab2 from '../views/page-materi/kelas-dua/ips/ips2-bab2';
import Kelas2ipsBab3 from '../views/page-materi/kelas-dua/ips/ips2-bab3';
import Kelas2ipsBab4 from '../views/page-materi/kelas-dua/ips/ips2-bab4';
import Kelas2pknBab1 from '../views/page-materi/kelas-dua/pkn/pkn2-bab1';/*pkn*/
import Kelas2pknBab2 from '../views/page-materi/kelas-dua/pkn/pkn2-bab2';
import Kelas2pknBab3 from '../views/page-materi/kelas-dua/pkn/pkn2-bab3';
import Kelas2pknBab4 from '../views/page-materi/kelas-dua/pkn/pkn2-bab4';

/*import materi kelas3*/
import Kelas3BahasaBab1 from '../views/page-materi/kelas-tiga/bahasa/bahasa3-bab1';
import Kelas3BahasaBab2 from '../views/page-materi/kelas-tiga/bahasa/bahasa3-bab2';
import Kelas3BahasaBab3 from '../views/page-materi/kelas-tiga/bahasa/bahasa3-bab3';
import Kelas3BahasaBab4 from '../views/page-materi/kelas-tiga/bahasa/bahasa3-bab4';
import Kelas3IpaBab1 from '../views/page-materi/kelas-tiga/ipa/ipa3-bab1';
import Kelas3IpaBab2 from '../views/page-materi/kelas-tiga/ipa/ipa3-bab2';
import Kelas3IpaBab3 from '../views/page-materi/kelas-tiga/ipa/ipa3-bab3';
import Kelas3IpaBab4 from '../views/page-materi/kelas-tiga/ipa/ipa3-bab4';
import Kelas3PknBab1 from '../views/page-materi/kelas-tiga/pkn/pkn3-bab1';
import Kelas3PknBab2 from '../views/page-materi/kelas-tiga/pkn/pkn3-bab2';
import Kelas3PknBab3 from '../views/page-materi/kelas-tiga/pkn/pkn3-bab3';
import Kelas3PknBab4 from '../views/page-materi/kelas-tiga/pkn/pkn3-bab4';

const routes = {
    '/': Home,
    '/home': Home,
    '/login': Login,
    '/register': Register,
    '/homecore': HomeCore,
    '/academy': Listclass,
    '/kelassatu': Kelassatu,
    '/kelasdua': Kelasdua,
    '/kelastiga': Kelastiga,
    '/aboutus': Aboutus,
    
    '/kelassatuipa': Kelassatuipa,
    '/kelassatubahasa': Kelassatubahasa,
    '/kelassatuips': Kelassatuips,
    '/kelassatupkn': Kelassatupkn,
    '/kelasduabahasa': Kelasduabahasa,
    '/kelasduaipa': Kelasduaipa,
    '/kelasduaips': Kelasduaips,
    '/kelasduapkn': Kelasduapkn,
    '/kelastigabahasa': Kelastigabahasa,
    '/kelastigaipa': Kelastigaipa,
    '/kelastigapkn': Kelastigapkn,

    /*route materi kelas satu*/
    '/kelas1bahasabab1': Kelas1BahasaBab1,
    '/kelas1bahasabab2': Kelas1BahasaBab2,
    '/kelas1bahasabab3': Kelas1BahasaBab3,
    '/kelas1bahasabab4': Kelas1BahasaBab4,
    '/kelas1ipabab1': Kelas1IpaBab1,
    '/kelas1ipabab2': Kelas1IpaBab2,
    '/kelas1ipabab3': Kelas1IpaBab3,
    '/kelas1ipabab4': Kelas1IpaBab4,
    '/kelas1ipsbab1': Kelas1IpsBab1,
    '/kelas1ipsbab2': Kelas1IpsBab2,
    '/kelas1ipsbab3': Kelas1IpsBab3,
    '/kelas1ipsbab4': Kelas1IpsBab4,
    '/kelas1pknbab1': Kelas1PknBab1,
    '/kelas1pknbab2': Kelas1PknBab2,
    '/kelas1pknbab3': Kelas1PknBab3,
    '/kelas1pknbab4': Kelas1PknBab4,

    /*route materi kelas dua*/
    '/kelas2bahasabab1': Kelas2BahasaBab1,
    '/kelas2bahasabab2': Kelas2BahasaBab2,
    '/kelas2bahasabab3': Kelas2BahasaBab3,
    '/kelas2bahasabab4': Kelas2BahasaBab4,
    '/kelas2ipabab1': Kelas2IpaBab1,
    '/kelas2ipabab2': Kelas2IpaBab2,
    '/kelas2ipabab3': Kelas2IpaBab3,
    '/kelas2ipabab4': Kelas2IpaBab4,
    '/kelas2ipsbab1': Kelas2ipsBab1,
    '/kelas2ipsbab2': Kelas2ipsBab2,
    '/kelas2ipsbab3': Kelas2ipsBab3,
    '/kelas2ipsbab4': Kelas2ipsBab4,
    '/kelas2pknbab1': Kelas2pknBab1,
    '/kelas2pknbab2': Kelas2pknBab2,
    '/kelas2pknbab3': Kelas2pknBab3,
    '/kelas2pknbab4': Kelas2pknBab4,

    /*route materi kelas tiga*/
    '/kelas3bahasabab1': Kelas3BahasaBab1,
    '/kelas3bahasabab2': Kelas3BahasaBab2,
    '/kelas3bahasabab3': Kelas3BahasaBab3,
    '/kelas3bahasabab4': Kelas3BahasaBab4,
    '/kelas3ipabab1': Kelas3IpaBab1,
    '/kelas3ipabab2': Kelas3IpaBab2,
    '/kelas3ipabab3': Kelas3IpaBab3,
    '/kelas3ipabab4': Kelas3IpaBab4,
    '/kelas3pknbab1': Kelas3PknBab1,
    '/kelas3pknbab2': Kelas3PknBab2,
    '/kelas3pknbab3': Kelas3PknBab3,
    '/kelas3pknbab4': Kelas3PknBab4,
};

export default routes;