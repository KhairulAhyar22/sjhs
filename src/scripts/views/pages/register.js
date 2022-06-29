import drawer from "../../utils/drawer";
import Login from "./login";
const Register = {
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
              <li><a id="login"href="#/login">Login</a></li>
              <li><a href="#/register">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="form">
        <form class="login-form">
          <div class="inner-form">
            <h2 class="form-title">REGISTRASI</h2>
            <input type="text" id="username" placeholder="Username" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <input type="button" id="btn"name="button" value="SUBMIT"> 
          </div>
        </form>
      </div>
    </main>
    `;

    
  },
  
  async afterRender() {
    drawer();
    // Fungsi ini akan dipanggil setelah render()
    const username = document.getElementById('username');
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', async() => {
      const dataRegis = {
        userName: username.value,
        email: userEmail.value,
        password: userPassword.value,
      };

      const response = await fetch('http://54.255.186.214:5000/regis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataRegis),
      });
      const responsejson = await response.json();
      console.log(responsejson);
      if(dataRegis.userName && dataRegis.email && dataRegis.password){
        alert('Registrasi Berhasil');
      };
      if(dataRegis.userName == "" || dataRegis.email =="" || dataRegis.password == ""){
        alert('Data Restrasi Belum Lengkap');
      }
    });

  },
};
  
export default Register;