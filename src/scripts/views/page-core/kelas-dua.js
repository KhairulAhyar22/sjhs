import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelasdua = {
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
            <img class="image-teacher"src="./images/hero-kelas2.webp" alt="hero kelas 2">
          </div>
          <div class="detail-list-study">
            <h4 class="tl-mp">Mata Pelajaran  <span style="color: red;">Kelas VIII</span></h4>
            <div class="hr"></div>
            <div class="list-study">
              <ul>
                <li class="item-study"><a href="#/kelasduabahasa">Bahasa Indonesia</a></li>
                <li class="item-study"><a href="#/kelasduaipa">IPA</a></li>
                <li class="item-study"><a href="#/kelasduaips">IPS</a></li>
                <li class="item-study"><a href="#/kelasduapkn">PKN</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="list-book">
          <div class="book">
            <h4>Bahasa Indonesia VIII</h4>
            <img src="./images/book-reference/coverbahasa2.png" alt="buku bahasa indonesia">
            <div class="detail-book">
              <p>Bahasa Indonesia Wahana Pengetahuan/Kementerian Pendidikan dan Kebudayaan.-- 
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014. 
              xiv, 222 hlm. : ilus. ; 29,7 cm.<br>
              Untuk SMP/MTs Kelas VIII</p>
              <a href="https://drive.google.com/file/d/1ulRihK_jWoLf1Vl3vVBr59wvW-PIA4M1/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPA VIII</h4>
            <img src="./images/book-reference/coveripa2.png" alt="buku ilmu pengetahuan alam">
            <div class="detail-book">
              <p>Ilmu Pengetahuan Alam / Kementerian Pendidikan dan Kebudayaan.--
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014.
              vi, 214. : ilus. ; 17,6 x 25 cm.<br>
              Untuk SMP/MTs Kelas VIII Semester 1</p>
              <a href="https://drive.google.com/file/d/1LxP29hCihpasrg4hqG4VNi9VA8m8GG9e/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPS VIII</h4>
            <img src="./images/book-reference/coverips2.png" alt="buku ilmu pengetahuan sosial">
            <div class="detail-book">
              <p>Ilmu Pengetahuan Sosial / Kementerian Pendidikan dan Kebudayaan.-- 
              Jakarta: Kementerian Pendidikan dan Kebudayaan, 2014.
              vi, 178 hlm. : ilus ; 25 cm.<br>
              Untuk SMP/MTs Kelas VIII Semester 1</p>
              <a href="https://drive.google.com/file/d/14zb8810U-53wKvwzb1xH1yczJMDBFG1K/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>PKN VIII</h4>
            <img src="./images/book-reference/coverpkn2.png" alt="buku pendidikan kewarga negaraan">
            <div class="detail-book">
              <p>Pendidikan Pancasila dan Kewarganegaraan : buku guru / Kementerian 
              Pendidikan dan Kebudayaan.-- Jakarta: Kementerian Pendidikan dan Kebudayaan, 
              2014. 
              x, 170 hlm. : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas VIII</p>
              <a href="https://drive.google.com/file/d/14zb8810U-53wKvwzb1xH1yczJMDBFG1K/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Matematika VIII</h4>
            <img src="./images/book-reference/covermtk2.png" alt="buku matematika">
            <div class="detail-book">
              <p>Matematika / Kementerian Pendidikan dan Kebudayaan.-- 
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014.
              viii, 212 hlm : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas VIII Semester 1</p>
              <a href="https://drive.google.com/file/d/1azSXoqyn14qnPQmsW7XdUK1m-xSp2c3_/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Bahasa Inggris VIII</h4>
            <img src="./images/book-reference/coverbahasain2.png" alt="buku bahasa inggris">
            <div class="detail-book">
              <p>Bahasa Inggris, When English Rings a Bell / Kementerian Pendidikan dan 
              Kebudayaan. Jakarta : Kementerian Pendidikan dan Kebudayaan, 2014. 
               vi, 226 hlm. : ilus. ; 25cm.<br> 
              Untuk SMP/MTs Kelas VIII</p>
              <a href="https://drive.google.com/file/d/1na_hTEYAYdDDGrxNFhpH05fEKzYceZ87/view?usp=drivesdk" target="blank">Lihat Buku-></a>
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
  
export default Kelasdua;