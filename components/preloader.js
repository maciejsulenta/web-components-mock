class Preloader extends HTMLElement {
  connectedCallback() {
    const tapes = JSON.parse(this.attributes.tapes.value);

    this.innerHTML = `
      <div class="preloader">
        ${tapes.map((tape) => `
        <div class="preloader__tape">
          <police-tape img="../landing/assets/images/policeTape${tape}.png"></police-tape>
        </div>
      `)}
      </div>
    `;
    this.initializePreloader();
  }
  get preloader() {
    return document.querySelector('.preloader');
  }

  #startPreloader(displayStyle = "block", classHandle = "add") {
    this.preloader.style.display = displayStyle;
    classHandle === 'remove' ? document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll');
  }

  initializePreloader() {
    window.addEventListener("load", () => {
      const wasPreloaderDisplayed = localStorage.getItem('wasPreloaderDisplayed');

      if(!wasPreloaderDisplayed) {
        this.#startPreloader();
        setTimeout(() => this.#startPreloader('none', 'remove'), 2000);

        localStorage.setItem("wasPreloaderDisplayed", true);
      }
    })
  }

}

customElements.define("website-preloader", Preloader);
