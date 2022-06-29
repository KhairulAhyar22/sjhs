import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelastigabahasa = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3bahasabab1">Berguru Pada Pengalaman</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3bahasabab2">Menanggapi Sesuatu Berdasarkan Fakta</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3bahasabab3">Menyanggah Pendapat dan Gagasan Secara Bijak</a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/bhsind/bhsk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3bahasabab4">Menemukan Solusi Melalui Percobaan</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelastiga">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1I3fjToxbXxrPU-fC4DBX99VCIVimHdbi/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelastigabahasa;