const load = document.querySelector('.load');
const section = document.querySelector('.section');

function init() {
  setTimeout(() => {
    load.style.opacity = 0;
    load.style.display = 'none';

    section.style.display = 'block';
    setTimeout(() => (section.style.opacity = 1), 50);
  }, 4000);
}

init();