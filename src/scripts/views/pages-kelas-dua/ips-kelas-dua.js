import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelasduaips = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipsbab1">Keunggulan Lokasi dan Kehidupan Masyarakat Indonesia</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/ips/ipsk2.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas2ipsbab2">Dinamika Kependudukan dan Pembangunan Nasional</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelasdua">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/14zb8810U-53wKvwzb1xH1yczJMDBFG1K/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelasduaips;