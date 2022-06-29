import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/content-home.css';
import '../styles/responsive.css';
import '../styles/list-class.css';
import '../styles/matapelajaran.css';
import '../styles/about-us.css';
import '../styles/list-bab.css';
import '../styles/materi1.css';
import App from './views/app';

const app = new App(document.querySelector('#main-content'));

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});

