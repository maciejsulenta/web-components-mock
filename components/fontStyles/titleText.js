class TitleText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1 class="title-text">${this.textContent}</h1>
    `;
  }
}

customElements.define("title-text", TitleText);
