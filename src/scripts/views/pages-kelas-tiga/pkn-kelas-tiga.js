import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelastigapkn = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3pknbab1">Berkomitmen terhadap Pancasila sebagai Dasar Negara </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3pknbab2">Menumbuhkan Kesadaran Berkonstitusi </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3pknbab3">Berkomitmen terhadap Pokok Kaidah Negara Fundamenta </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk3.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas3pknbab4">Kepatuhan Terhadap Norma</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelastiga">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1YPHIkow_vYX-6t4J3No0eAqd8BKBWMCK/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelastigapkn;