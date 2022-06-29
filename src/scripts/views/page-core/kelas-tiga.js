import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Kelastiga = {
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
            <img class="image-teacher"src="./images/hero-kelas3.png" alt="hero kelas 3">
          </div>
          <div class="detail-list-study">
            <h4 class="tl-mp">Mata Pelajaran <span style="color: red;">Kelas IX</span></h4>
            <div class="hr"></div>
            <div class="list-study">
              <ul>
                <li class="item-study"><a href="#/kelastigabahasa">Bahasa Indonesia</a></li>
                <li class="item-study"><a href="#/kelastigaipa">IPA</a></li>
                <li class="item-study"><a href="#/kelastigapkn">PKN</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="list-book">
          <div class="book">
            <h4>Bahasa Indonesia IX</h4>
            <img src="./images/book-reference/coverbahasa3.png" alt="buku bahasa indonesia">
            <div class="detail-book">
              <p>Bahasa Indonesia: buku siswa/ Kementerian Pendidikan dan Kebudayaan.-- . 
              Jakarta: Kementerian Pendidikan dan Kebudayaan, 2015. 
              xii, 270 hlm. : ilus. ; 25 cm.<br> 
              Untuk SMP/MTs Kelas IX</p>
              <a href="https://drive.google.com/file/d/1I3fjToxbXxrPU-fC4DBX99VCIVimHdbi/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPA IX</h4>
            <img src="./images/book-reference/coveripa3.png" alt="buku ilmu pengetahuan alam">
            <div class="detail-book">
              <p>Ilmu Pengetahuan Alam/ Kementerian Pendidikan dan Kebudayaan.-- . 
              Jakarta: Kementerian Pendidikan dan Kebudayaan, 2015. 
              (xviii), (310) hlm. : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas IX Semester 1</p>
              <a href="https://drive.google.com/file/d/1Rk6ukO5NtW10ZN_2L1NtfINIDKcqasn6/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>IPS IX</h4>
            <img src="./images/book-reference/coverips2.png" alt="buku ilmu pengetahuan sosial">
            <div class="detail-book">
              <p>Ilmu Pengetahuan Sosial / Kementerian Pendidikan dan Kebudayaan.-- . 
              Jakarta : Kementerian Pendidikan dan Kebudayaan, 
              xiv, 274 hlm. : ilus. ; 25 cm.<br>
              Untuk SMP/MTs Kelas IX</p>
              <a href="https://drive.google.com/file/d/1TdKRO1U6_HIH4wc9miyIuO05CaexhWdR/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>PKN IX</h4>
            <img src="./images/book-reference/coverpkn2.png" alt="buku pendidikan kewarga negaraan">
            <div class="detail-book">
              <p>Pendidikan Pancasila dan Kewarganegaraan / Kementerian Pendidikan dan 
              Kebudayaan.-- . Jakarta : Kementerian Pendidikan dan Kebudayaan, 2015.
              xii, 167 hlm. : ilus. ; 25 cm.
              Untuk SMP/MTS Kelas IX</p>
              <a href="https://drive.google.com/file/d/1YPHIkow_vYX-6t4J3No0eAqd8BKBWMCK/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Matematika IX</h4>
            <img src="./images/book-reference/covermtk2.png" alt="buku matematika">
            <div class="detail-book">
              <p>Matematika / Kementerian Pendidikan dan Kebudayaan -- Jakarta : Kementerian Pendidikan dan Kebudayaan, 2015.
              vi, 274 hlm : ilus. ; 25 cm.<br>Untuk SMP/MTS Kelas IX Semester1</p>
              <a href="https://drive.google.com/file/d/1qF_e11OSXwognRiwDaQ3xZUODv1_ChgB/view?usp=drivesdk" target="blank">Lihat Buku-></a>
            </div>
          </div>

          <div class="book">
            <h4>Bahasa Inggris IX</h4>
            <img src="./images/book-reference/coverbahasain2.png" alt="buku bahasa inggris">
            <div class="detail-book">
              <p>Bahasa Inggris, think Globally Act Locally/Kementerian Pendidikan dan 
              Kebudayaan.-- 
              Jakarta: Kementerian Pendidikan dan Kebudayaan , 2015.<br>
              vi, 276 hlm. : ilus. ; 25 cm. 
              Untuk SMP/MTs Kelas IX</p>
              <a href="https://drive.google.com/file/d/1U5pa7cf5GGvzSETdfhEC6xNurrStzJKl/view?usp=drivesdk" target="blank">Lihat Buku-></a>
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
  
export default Kelastiga;