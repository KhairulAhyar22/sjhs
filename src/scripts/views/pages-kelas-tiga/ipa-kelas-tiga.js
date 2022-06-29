import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelastigaipa = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const nav = responsejson.materi.filter((m) => m.id === "navMateri")[0];
    return `
    ${nav.page}
    <main>
      <div class="container">
        <section class="list-bab">
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab1">Sistem Reproduksi pada Manusia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab2">Reproduksi pada Tumbuhan dan Hewan</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab3">Kependudukan dan Lingkungan</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA9.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3ipabab4">Partikel Penyusun Benda Mati dan Makhluk Hidup</a>                                                         
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelastiga">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1Rk6ukO5NtW10ZN_2L1NtfINIDKcqasn6/view?usp=drivesdk" target="blank">Kunjungi buku</a>
        </div>
      </div>
    </main>
    `
    ;  
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default Kelastigaipa;