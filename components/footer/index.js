class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<footer class="footer">
  <ul class="footer__list">
    <li>
      <a href="https://instagram.com/sashafromlibertalia" target="_blank" rel="noopener" class="footer__link">
        Мой инстаграм*
      </a>
    </li>
    <li>
      <a href="https://github.com/sashafromlibertalia" target="_blank" rel="noopener" class="footer__link">
        Мой гитхаб
      </a>
    </li>
  </ul>
  <p id="timestamp"></p>
</footer>
`
  }
}

customElements.define('custom-footer', Footer)
