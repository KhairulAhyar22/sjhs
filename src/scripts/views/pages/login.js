import drawer from "../../utils/drawer";
const Login = {
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
            <h2 class="form-title">LOGIN</h2>
            <input type="email" id="emaill" placeholder="Email" required>
            <input type="password" id="passwordl" placeholder="Password" required>
            <a type="button" id="btnl">SUBMIT</a> 
            <hr>
            <p class="form-text">Belum Punya Akun?</p>
            <p ><a class="show-register" href="#/register"> Registrasi/Buat Akun</a></p>
          </div>
        </form>
      </div>
    </main>
    `
    ;  
  },
  
  async afterRender() {
    drawer();

    // Fungsi ini akan dipanggil setelah render()
    const btnl = document.getElementById('btnl');

    btnl.addEventListener('click', async () => {
      const emaill = document.getElementById('emaill').value;
      const userPassword = document.getElementById('passwordl').value;

      const response = await fetch('http://54.255.186.214:5000/regis');
      const responsejson = await response.json();
    
      const arrayLogin = responsejson.data.regis;
      const dataRegis = arrayLogin.filter((user) => user.email === emaill && user.password === userPassword);
      const objectTarget = dataRegis.filter((user) => user.email)[0];
      console.log(objectTarget);

      if(dataRegis.length == 0){
        alert('Email atau Password Anda Salah');
      }
      if(objectTarget.email === emaill && objectTarget.password === userPassword) {  
        const btnLogin = document.getElementById('btnl');
        btnLogin.setAttribute("href", "#/homecore");
        btnLogin.addEventListener('click', function() {
          alert('Login Berhasil');
        });
      }    
    });
  },
};
  
export default Login;