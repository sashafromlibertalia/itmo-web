class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<nav class="navigation">
  <a data-link="main" href="index.html" class="navigation__item">Главная</a>
  <a data-link="feedback" href="feedback.html" class="navigation__item">Отзывы о моей работе</a>
  <a data-link="schedule" href="schedule.html" class="navigation__item">Создать расписание</a>
</nav>
`
  }
}

customElements.define('nav-bar', Navbar)
