import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelasduaipa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/1IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab1">Gerak pada Makhluk Hidup dan Benda</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/2IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab2">Rangka, Otot dan Pesawat Sederhana</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/3IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab3">Struktur dan Fungsi Jaringan Tumbuhan serta Pemanfaatannya dalam Teknologi</a>                                                         
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ipa/4IPA8.jpg"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipabab4">Sifat Bahan dan Pemanfaatannya dalam Kehidupan Sehari-hari</a>                                                         
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelasdua">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1LxP29hCihpasrg4hqG4VNi9VA8m8GG9e/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelasduaipa;