class DescHeaderText extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <p class="desc-header">${this.textContent}</p>
      `;
    }
  }
  
  customElements.define("description-header", DescHeaderText);
  