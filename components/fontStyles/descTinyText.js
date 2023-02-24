class DescTinyText extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <p class="desc-tiny">${this.textContent}</p>
      `;
    }
  }
  
  customElements.define("description-tiny", DescTinyText);
  