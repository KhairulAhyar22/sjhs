import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelasduabahasa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab1">Belajar Pada Kehidupan Fauna</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab2">Menepis Lupa Jasa Inspirator Bangsa</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab3">Menggapai Cita Melalui Kreatifitas</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2bahasabab4">Memecahkan Permasalahan Dampak Teknologi Lewat Diskusi</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelasdua">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1ulRihK_jWoLf1Vl3vVBr59wvW-PIA4M1/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelasduabahasa;