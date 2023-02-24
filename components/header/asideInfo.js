class AsideInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="aside-info">
        <div class="aside-info__line"></div>
        <a class="aside-info__text" href="mailto:flitsagency@gmail.com">${this.textContent}</a>
      </aside>
    `;
  }
}

customElements.define("aside-info", AsideInfo);
