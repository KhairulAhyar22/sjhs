import drawer from "../../utils/drawer";
const Home = {
  async render() {
    return `
  <header>
    <div class="navigation">
      <div class="nav-inner">
        <div class="humberger-menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <!--Object satu-->
        <div class="logo">
          <h1>Eazy Learn</h1>
        </div>
        <!--Object dua-->
        <div class="menu">
          <ul id="drawer" class="nav_list">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/login">Login</a></li>
            <li><a href="#/register">Register</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
    <!--Hero-->
    <div class="hero">
      <div class="box-hero-image">
        <img class="hero-image" src="./images/belajar.jpg" alt="hero">
      </div>
      <div class="detil-hero">
        <h2 class="description-hero">Belajar dan Perdalam Pengetahuan Anda dengan Mengulas Materi Sekolah Anda</h2>
        <a href="#/login" class="button-login">Belajar Sekarang</a>
      </div>
    </div>

    <!--Latar Belakang-->
    <div class="description-app">
      <div class="inner-description-app">
        <h2 class="title">Quotes to be Successfull</h2>
        <p class="detail-description">"Pembelajaran tidak didapat dengan kebetulan, ia harus dicari dengan semangat dan dijalani dengan tekun."</p>
        <p class="detail-description">"Pengetahuan tidaklah cukup, maka kita harus mengamalkannya. Niat tidaklah cukup, maka kita harus melakukannya."</p>
        <p class="detail-description">"Jika ingin menimba ilmu sedalam-dalamnya, hendaknya menghormati guru, belajar dengan giat, bersungguh-sungguh, serta berterimakasih pada guru tanpa rasa pamrih."</p>
        <p class="detail-description">"Belajar memang melelahkan, namun akan lebih melelahkan lagi jika saat ini kamu tidak belajar."</p>
        <p class="detail-description">"Setiap perjuangan pasti ada hasilnya. Gagal memberi pelajaran, sukses memberi kebahagiaan."</p>
      </div>
    </div>

    <!--reverensi belajar-->
    <div class="container-article">
      <div class="inner-article">
        <h2 class="title">Artikel Motivasi Belajar</h2>
        <div class="list-article">
          <article>
            <img class="article-image"src="./images/article/article1.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">Manfaat Ilmu Pengetahuan Bagi Kehidupan Manusia</h3>
              <p class="article-description">Ilmu pengetahuan merupakan suatu pemahaman yang didapatkan manusia melalui penelitian atau penemuan yang tersusun secara sistematis dan dapat diuji melalui metode-metode tertentu.</p>
              <a class="read-more" target="blank" href="https://www.websitependidikan.com/2017/07/manfaat-ilmu-pengetahuan-bagi-kehidupan-manusia.html">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/article/article2.jpg" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">10 Cara Memotivasi Diri Sendiri untuk Rajin Belajar</h3>
              <p class="article-description">Bagi beberapa orang, belajar merupakan salah satu momok yang tidak mudah ditaklukkan. Ada berbagai macam alasan mengapa hal tersebut bisa terjadi.</p>
              <a class="read-more" target="blank" href="https://www.tipspengembangandiri.com/cara-memotivasi-diri-sendiri-untuk-belajar/">Baca Selengkapnya-></a>
            </div>
          </article>

          <article>
            <img class="article-image"src="./images/article/article3.png" alt="article 1">
            <div class="article-detail">
              <h3 class="article-title">8 Dampak Negatif Malas Belajar Bagi Diri Sendiri</h3>
              <p class="article-description">Meskipun manfaat belajar sudah terpampang jelas masih ada saja orang yang masih malas dan mengabaikan akibat malas belajar bagi diri sendiri. Lalu apakah akibat bagi orang yang malas belajar? Berikut beberapa dampak negatif jika malas belajar bagi diri sendiri maupun orang lain.</p>
              <a class="read-more" target="blank" href="https://www.rijal09.com/2019/08/dampak-negatif-malas-belajar-bagi-diri-sendiri.html">Baca Selengkapnya-></a>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!--Tim Develop-->
    <div class="container-develop">
      <div class="box-title">
        <h2 class="develop-title">Tim Pengembang</h2>
      </div>
      
      <div class="list-develop">
        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="./images/profil/fian.png" alt="foto nurfian">
              </div>
              <h3 class="profil-name">Nurfian Maulana</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Bumigora Mataram</td>
              </tr>
              <tr>
                <td>TTL</td>
                <td>: Surabaya, 1 Juni 1998</td>
              </tr>
              <tr>
                <td>Keahlian</td>
                <td>: Front End Web Development</td>
              </tr>
            </table>
            <p>"Banyak orang yang tidak bertindak karena takut gagal, padahal tidak bertindak adalah kegagalan yang jelas sudah terjadi, Maka berjuanglah demi mencapai titik dimana kau disebut orang yang Sukses"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="./images/profil/mustika1.png" alt="foto mustika">
              </div>
              <h3 class="profil-name">Mustika Anggraini</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
            <table>
              <tr>
                <td>Universitas</td>
                <td>: Universitas Mataram</td>
              </tr>
              <tr>
                <td>TTL</td>
                <td>: Sumbawa Barat, 25 Maret 2000</td>
              </tr>
              <tr>
                <td>Keahlian</td>
                <td>: Front End Web Development</td>
              </tr>
            </table>

            <p>"Bersyukur atas apa yang dimiliki, ikhlas atas apa yang terjadi, dan berharap hanya pada yang Maha Kuasa"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="./images/profil/bayu1.jpg" alt="foto bayu">
              </div>
              <h3 class="profil-name">Bayu Prasetiyo</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
          <table>
            <tr>
              <td>Universitas</td>
              <td>: Universitas Udayana</td>
            </tr>
            <tr>
              <td>TTL</td>
              <td>: Nabire, 1 February 2001</td>
            </tr>
            <tr>
              <td>Keahlian</td>
              <td>: Front End Web Development</td>
            </tr>
          </table>

            <p>"Janganlah putus asa disaat mengalami penderitaan, Jangan takut mengalami Kegagalan, Orang hebat tidak dihasilkan dari kemudahan, kesenangan, dan kenyamanan. Mereka dibentuk melalui kesulitan, tantangan, dan air mata untuk menjadi sukses dikemudian hari"</p>
          </div>
        </div>

        <div class="develop">
          <div class="box-profil">
            <div class="profil">
              <div class="profil-photo">
                <img src="./images/profil/khairul.jpg" alt="foto khairul">
              </div>
              <h3 class="profil-name">Khairul Ahyar</h3>
            </div>
            <div class="object-vertical"></div>
          </div>

          <div class="motto">
          <table>
            <tr>
              <td>Universitas</td>
              <td>: Cokroaminoto Palopo</td>
            </tr>
            <tr>
              <td>TTL</td>
              <td>: Tanete Lampe e, 17 April 2002</td>
            </tr>
            <tr>
              <td>Keahlian</td>
              <td>: Front End Web Development</td>
            </tr>
          </table>
            
              <p>"Memiliki hidup yang baik, hubungan yang baik, dan bermanfaat terhadap lingkungan dan orang disekitar. Tidak menjadi sempurna namun selalu bersyukur terhadap pemberian sang pencipta"</p>
            </div>
          </div>
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
  
export default Home;