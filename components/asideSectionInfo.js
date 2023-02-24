class AsideSectionInfo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <aside class="aside-section">
          <div class="aside-section__line"></div>
          <h3 class="aside-section__info">${this.textContent}</h3>
        </aside>
      `;
    }
  }
  
  customElements.define("aside-section-info", AsideSectionInfo);
  