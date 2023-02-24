class Footer extends HTMLElement {
  connectedCallback() {
        const icons = JSON.parse(this.attributes.icons.value);
        const links = JSON.parse(this.attributes.socialLinks.value);
        const altsData = JSON.parse(this.attributes.logoAlt.value);    

      this.innerHTML = `
        <div class="footer">
            ${icons.map((item, index) => `<a href="${links[index]}"><img class="footer__icon" src="${item}" alt="${altsData[index]}"/></a>`).join('')}
        </div>
        `;
    }
  }
  
  customElements.define("footer-section", Footer);
  