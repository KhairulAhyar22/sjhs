const drawer = () => {
  const button = document.querySelector('#hamburgerButton');
  const drawer = document.querySelector('#drawer');
  const content = document.querySelector('#main-content');

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    drawer.classList.toggle('open');
  });

  content.addEventListener('click', (event) => {
    event.stopPropagation();
    drawer.classList.remove('open');
  });
  
};
export default drawer;