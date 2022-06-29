import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelassatuips = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab1">Keadaan Alam dan Aktivitas Penduduk Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab2">Keadaan Penduduk Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab3">Potensi dan Pemanfaatan Sumber Daya Alam</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1ipsbab4">Dinamika Interaksi Manusia</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelassatu">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1Dlu79XmkgUFNdU_BdBJr2unbcVErbIM2/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelassatuips;