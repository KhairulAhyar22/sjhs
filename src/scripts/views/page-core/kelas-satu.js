import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelassatu = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const nav = responsejson.materi.filter((m) => m.id === "navMateri")[0];
    return `
    ${nav.page}
    <main>
      <div class="container">
        <div class="box-list-study">
          <div class="box-image-teacher">
            <img class="image-teacher"src="./images/hero-kelas1.png" alt="hero kelas 1">
          </div>
          <div class="detail-list-study">
            <h4 class="tl-mp">Mata Pelajaran  <span style="color: red;">Kelas VII</span></h4>
            <div class="hr"></div>
            <div class="list-study">
              <ul>
                <li class="item-study"><a href="#/kelassatubahasa">Bahasa Indonesia</a></li>
                <li class="item-study"><a href="#/kelassatuipa">IPA</a></li>
                <li class="item-study"><a href="#/kelassatupkn">PKN</a></li>
                <li class="item-study"><a href="#/kelassatuips">IPS</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="list-book">
          <div class="book">
            <h4>Bahasa Indonesia VII</h4>
            <img src="./images/book-reference/coverbahasa1.png" alt="buku bahasa indonesia">
            <div class="detail-book">
              <p>Bahasa Indonesia Wahana Pengetahuan / Kementerian Pendidikan dan
              Kebudayaan.-- Edisi Revisi. Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014.
              xvi, 272 hlm. : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas VII</p>
              <a href="https://drive.google.com/file/d/1fb3bbcsMO2qzfJyK1W-6J0wQBv0YQdvY/view?usp=sharing" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPA VII</h4>
            <img src="./images/book-reference/coveripa1.png" alt="buku ilmu pengetahuan alam">
            <div class="detail-book">
              <p>Ilmu Pengetahuan Alam / Kementerian Pendidikan dan Kebudayaan.-- Edisi 
              Revisi. Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014
              vi, 150 hlm. : ilus. ; 25 cm.<br>Untuk SMP/MTs Kelas VII</p>
              <a href="https://drive.google.com/file/d/1NgGI9v-8sAIkHImHq-6pE6Ju78vjjDDF/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPS VII</h4>
            <img src="./images/book-reference/coverips1.png" alt="buku ilmu pengetahuan sosial">
            <div class="detail-book">
              <p>
              Ilmu Pengetahuan Sosial / Kementerian Pendidikan dan Kebudayaan.-- Edisi Revisi . 
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014
              xvi, 264 hlm. : ilus. ; 25 cm. 
              <br>Untuk SMP/MTs Kelas VII</p>
              <a href="https://drive.google.com/file/d/1Dlu79XmkgUFNdU_BdBJr2unbcVErbIM2/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>PKN VII</h4>
            <img src="./images/book-reference/coverpkn1.png" alt="buku pendidikan kewarga negaraan">
            <div class="detail-book">
              <p>Pendidikan Pancasila dan Kewarganegaraan / Kementerian Pendidikan dan
              Kebudayaan. -- Edisi Revisi. Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014. 
              x, 162 hlm. : ilus. ; 25 cm<br>
              Untuk SMP/MTs Kelas VII</p>
              <a href="https://drive.google.com/file/d/1Zo3MtZcVkcNy8Lyf979H6pEHeX-w2wYx/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Matematika VII</h4>
            <img src="./images/book-reference/covermtk1.png" alt="buku matematika">
            <div class="detail-book">
              <p>Matematika / Kementerian Pendidikan dan Kebudayaan.-- Edisi Revisi. 
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014.
              vi, 254 hlm : ilus. ; 17,6 × 25 cm.<br>
              Untuk SMP/MTs Kelas VII Semester 1</p>
              <a href="https://drive.google.com/file/d/1JFyCtpezP3D5LXkFDOnqplqgjD35ssxF/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Bahasa Inggris VII</h4>
            <img src="./images/book-reference/coverbahasain1.png" alt="buku bahasa inggris">
            <div class="detail-book">
              <p>Bahasa Inggris, When English Rings a Bell / Kementerian Pendidikan dan Kebudayaan.-- Edisi 
              Revisi. Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014. 
              vi, 210 hlm. : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas VII</p>
              <a href="https://drive.google.com/file/d/1Uy8Rs10DC5kPkgb0DhCWkoMrCD4vJKXZ/view?usp=drivesdk" target="blank">Lihat Buku-></a>
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
  
export default Kelassatu;