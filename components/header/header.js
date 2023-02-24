class Header extends HTMLElement {
  connectedCallback() {
    const [desc, img, asideLeft, socialLinks, altData, asideRight] = this.attributes;
    const icons = JSON.parse(asideLeft.value);
    const links = JSON.parse(socialLinks.value);
    const altsData = JSON.parse(altData.value);

    this.innerHTML = `
      <main class="header" id="home">
        <div class="header__content-wrap">
          <title-text>personal brand</title-text>
          <description-header>
            ${desc.value}
          </description-header>
          <send-button></send-button>
        </div>
        <div class="header__img-wrap">
          <img class="header__img" alt="A bunch of yellow police tapes" src="${img.value}"/>
        </div>
        <div class="header__img-wrap--mobile">
          <img class="header__img" alt="A bunch of yellow police tapes" src="${img.value}"/>
        </div>
        <div class="header__aside-left">
          <aside-socials img=${icons} links=${links} altData=${altsData}></aside-socials>
        </div>
        <div class="header__aside-right">
          <aside-info>${asideRight.value}</aside-info>
        </div>
      </main>
    `;
  }
}

customElements.define("header-layout", Header);
