import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Listclass = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const nav = responsejson.materi.filter((m) => m.id === "navMateri")[0];
    return `
    ${nav.page}
    <main>
      <div class="container-class">

        <div class="inner-class">
          <h3 class="title-class">Pilih Kelas Sesuai Tingkatan Anda</h3>
          <div class="list-class">
            <div class="box-class">
              <img class="image-class"src="./images/Kelas 1 smp.jpg" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelassatu">Lihat Kelas</a>
                </div>
              </div>
            </div>

            <div class="box-class">
              <img class="image-class" src="./images/Kelas 2 smp.png" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelasdua">Lihat Kelas</a>
                </div>
              </div>
            </div>

            <div class="box-class">
              <img class="image-class" src="./images/Kelas 3 smp.png" alt="1">
              <div class="box-detail-class">
                <div class="box-center">
                  <a class="more-detail-class"href="#/kelastiga">Lihat Kelas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  
export default Listclass;