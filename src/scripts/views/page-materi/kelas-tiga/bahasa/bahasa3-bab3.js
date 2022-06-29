import drawer from "../../../../utils/drawer";
import apiMateri from "../../../../config/api";
const Kelas3BahasaBab3 = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const materi = responsejson.materi;

    const nav = materi.filter((m) => m.id === "navMateri")[0];
    const objectTarget = materi.filter((m) => m.id === "bhsindo3b301");
    const pages = objectTarget.filter((m) => m.id === "bhsindo3b301")[0];
    
    return `
    ${nav.page}
    <main>
    <div class="container">
      <div class="inner-container-bab">
        <div class="btn-detail-bab">
          <a class="go-materi" href="#/kelastigabahasa">Lihat Materi</a>
        </div>
        ${pages.page}
        <div class="box-btn-move-pagebab">
          <a class="btn-move-pagebab" href="#/kelas3bahasabab2">Sebelumnya</a>
          <a class="btn-move-pagebab" href="#/kelas3bahasabab4">Selanjutnya</a>
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
  
export default Kelas3BahasaBab3;