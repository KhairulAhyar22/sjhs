import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelassatupkn = {
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
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1pknbab1">Berkomitmen terhadap Pancasila sebagai Dasar Negara </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1pknbab2">Menumbuhkan Kesadaran Berkonstitusi </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1pknbab3">Berkomitmen terhadap Pokok Kaidah Negara Fundamenta </a>                                                          
          </div>
          <div class="card-menu-bab">
            <img class="picture-menu-bab" src="./images/sampul bab/pkn/pknk1.png"  alt=""><img>
            <a class="detail-menu-bab" href="#/kelas1pknbab4">Kepatuhan Terhadap Norma</a>                                                          
          </div>
        </section>

        <div class="tombol-menu-bab"> 
          <a class="btn-menu-bab" href="#/kelassatu">Kembali</a>
          <a class="btn-menu-bab" href="https://drive.google.com/file/d/1Zo3MtZcVkcNy8Lyf979H6pEHeX-w2wYx/view?usp=drivesdk" target="blank">Kunjungi buku</a>
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
  
export default Kelassatupkn;