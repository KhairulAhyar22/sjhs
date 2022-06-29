import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelassatubahasa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab1">Cinta Lingkungan Hidup</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab2">Pengenalan Budaya Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab3">Remaja dan Pendidikan Karakter</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1bahasabab4">Teknologi Tepat Guna</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelassatu">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1fb3bbcsMO2qzfJyK1W-6J0wQBv0YQdvY/view?usp=sharing" target="blank">Kunjungi buku</a>
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
  
export default Kelassatubahasa;