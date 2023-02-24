class DescSmallText extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <p class="desc-small">${this.textContent}</p>
      `;
    }
  }
  
  customElements.define("description-small", DescSmallText);
  