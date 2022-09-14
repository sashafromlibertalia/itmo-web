class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<nav class="navigation">
  <a data-link="main" href="index.html" class="navigation__item">Главная</a>
  <a data-link="feedback" href="feedback.html" class="navigation__item">Отзывы</a>
  <a data-link="schedule" href="schedule.html" class="navigation__item">Расписание</a>
</nav>
`
  }
}

customElements.define('nav-bar', Navbar)
