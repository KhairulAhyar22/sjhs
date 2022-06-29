import drawer from "../../../../utils/drawer";
import apiMateri from "../../../../config/api";
const Kelas2ipsBab1 = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const materi = responsejson.materi;

    const nav = materi.filter((m) => m.id === "navMateri")[0];
    const objectTarget = materi.filter((m) => m.id === "ips2b101");
    const pages = objectTarget.filter((m) => m.id === "ips2b101")[0];
    
    return `
    ${nav.page}
    <main>
    <div class="container">
      <div class="inner-container-bab">
        <div class="btn-detail-bab">
          <a class="go-materi" href="#/kelasduaips">Lihat Materi</a>
        </div>
        ${pages.page}
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="#/kelasduaips">Sebelumnya</a>
          <a class="btn-move-pagebab" href="#/kelas2ipsbab2">Selanjutnya</a>
        </div>
      </div>
    </div>
    </main>
    `;
  },
  
  async afterRender() {
    drawer();
  },
};
  
export default Kelas2ipsBab1;