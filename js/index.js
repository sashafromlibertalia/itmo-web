const paths = Object.freeze({
  MAIN: {
    file: 'index.html',
    link: 'main'
  },
  FEEDBACK: {
    file: 'feedback.html',
    link: 'feedback'
  },
});

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const stampParagraph = document.querySelector('footer');
    const startTime = new Date().getTime();

    window.addEventListener('load', () => {
      stampParagraph.innerHTML += `Время загрузки - ${(new Date().getTime() - startTime) / 1000} с`;
    });

    const navigationLinks = document.querySelectorAll('.navigation__item');
    switch (true) {
      case document.location.pathname.includes(paths.MAIN.file):
        [...navigationLinks].find(link => link.dataset.link === paths.MAIN.link).classList.add('navigation__item_active');
        break;
      case document.location.pathname.includes(paths.FEEDBACK.file):
        [...navigationLinks].find(link => link.dataset.link === paths.FEEDBACK.link).classList.add('navigation__item_active');
        break;
    }
  })
})();
