class Skeleton extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<div class="skeleton__list">
  <div class="skeleton__item">
    <div class="skeleton__header skeleton__animation"></div>  
    <div class="skeleton__body skeleton__animation"></div>
  </div>
   <div class="skeleton__item">
    <div class="skeleton__header skeleton__animation"></div>  
    <div class="skeleton__body skeleton__animation"></div>
  </div>
   <div class="skeleton__item">
    <div class="skeleton__header skeleton__animation"></div>  
    <div class="skeleton__body skeleton__animation"></div>
  </div>
</div>
`
  }
}

customElements.define('skeleton-list', Skeleton)
