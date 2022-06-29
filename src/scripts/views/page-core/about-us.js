import drawer from "../../utils/drawer";
import apiMateri from "../../config/api";
const Aboutus = {
  async render() {
    const response = await fetch(apiMateri);
    const responsejson = await response.json();
    const nav = responsejson.materi.filter((m) => m.id === "navMateri")[0];
    return `
    ${nav.page}  
    <main>
    <div class="container">
      <div class="description-app box-color-dark">
        <div class="inner-description-app">
          <h2 class="title">Information</h2>
          <p> Aplikasi ini merupakan aplikasi pembelajaran gratis yang menyediakan materi-materi yang bersesuaian dengan materi sekolah yang tentunya akan menambah pengetahuan dan pemahaman khususnya siswa  pada jenjang sekolah menengah pertama (SMP)</p>
        </div>
      </div>

      <div class="list-bio-tim">
        <div class="bio-tim">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/bayu.png" alt="foto bayu">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Bayu Prasetiyo</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 1 Februari 2001</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Jl. Banjarmasin, Papua</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Hindu</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 085354179749</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: bayyuprsty_12</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Janganlah putus asa disaat mengalami penderitaan, Jangan takut mengalami Kegagalan, Orang hebat tidak dihasilkan dari kemudahan, kesenangan, dan kenyamanan. Mereka dibentuk melalui kesulitan, tantangan, dan air mata untuk menjadi sukses dikemudian hari"</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim box-color-dark">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/khairul.png" alt="foto khairul">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
              <tr>
                <td><strong>Nama</strong></td>
                <td>: Khairul Ahyar</td>
              </tr>
              <tr>
                <td><strong>Tgl</strong></td>
                <td>: 17 April 2002</td>
              </tr>
              <tr>
                <td><strong>Alamat</strong></td>
                <td>: Luwu Utara, Sulawasi Selatan</td>
              </tr>
              <tr>
                <td><strong>Agama</strong></td>
                <td>: Islam</td>
              </tr>
              <tr>
                <td><strong>Hp</strong></td>
                <td>: 082194947882</td>
              </tr>
              <tr>
                <td><strong>IG</strong></td>
                <td>: khairul.ahyar.129</td>
              </tr>
            </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Memiliki hidup yang baik, hubungan yang baik, dan bermanfaat terhadap lingkungan dan orang disekitar. Tidak menjadi sempurna namun selalu bersyukur terhadap pemberian sang pencipta"</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/mustika.png" alt="foto mustika">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Mustika Anggraini</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>: 25 Maret 2000</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>: Jl.Lalar Liang, Taliwang, Sumbawa Barat, Nusa Tenggara Barat</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Islam</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>: 082247064256</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: mustika7675</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Bersyukur atas apa yang dimiliki, ikhlas atas apa yang terjadi, dan berharap hanya pada yang Maha Kuasa"</p>
            </div> 
          </div>
        </div>

        <div class="bio-tim box-color-dark">
          <div class="inner-bio-tim">
            <div class="picture">
              <img class="image-tim" src="./images/tim/nurfian.png" alt="foto nurfian">
            </div>
            
            <div class="detail-biodata">
              <h3 class="title-desc-tim">Detail</h3>
              <hr>
              <table>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: Nurfian Maulana</td>
                </tr>
                <tr>
                  <td><strong>Tgl</strong></td>
                  <td>:  1 juni 1998</td>
                </tr>
                <tr>
                  <td><strong>Alamat</strong></td>
                  <td>:  Mataram, Nusa Tenggara Barat</td>
                </tr>
                <tr>
                  <td><strong>Agama</strong></td>
                  <td>: Islam</td>
                </tr>
                <tr>
                  <td><strong>Hp</strong></td>
                  <td>:  08980194252</td>
                </tr>
                <tr>
                  <td><strong>IG</strong></td>
                  <td>: Nurfian_maulana</td>
                </tr>
              </table>

              <h3 class="title-desc-tim">Motto</h3>
              <hr>
              <p>"Banyak orang yang tidak bertindak karena takut gagal, padahal tidak bertindak adalah kegagalan yang jelas sudah terjadi, Maka berjuanglah demi mencapai titik dimana kau disebut orang yang Sukses"</p>
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
  
export default Aboutus;