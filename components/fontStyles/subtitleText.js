class SubtitleText extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h2 class="subtitle-text">${this.textContent}</h2>
      `;
    }
  }
  
  customElements.define("subtitle-text", SubtitleText);
  