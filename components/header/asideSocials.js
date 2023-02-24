class AsideSocials extends HTMLElement {
  connectedCallback() {
    const icons = this.attributes.img.value.split(",");
    const links = this.attributes.links.value.split(",");
    const altsData = this.attributes.altData.value.split(",");

    this.innerHTML = `
      <aside class="aside-socials">
        <div class="aside-socials__line"></div>
          ${icons
            .map(
              (icon, index) =>
                `<a href='${links[index]}'><img class="aside-socials__img" src='${icon}' alt='${altsData[index]}'/></a>`
            )
            .join("")}
      </aside>
    `;
  }
}

customElements.define("aside-socials", AsideSocials);
