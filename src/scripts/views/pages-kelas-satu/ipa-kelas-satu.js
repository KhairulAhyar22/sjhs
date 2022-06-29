import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelassatuipa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab1">Object IPA dan Pengamatannya</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab2">Klasifikasi Benda</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab3">Klasifikasi Makhluk Hidup</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA7.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipabab4">Klasifikasi Makhluk Hidup</a>                                                         
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelassatu">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1NgGI9v-8sAIkHImHq-6pE6Ju78vjjDDF/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelassatuipa;