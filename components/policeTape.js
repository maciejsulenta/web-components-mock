class PoliceTape extends HTMLElement {
  connectedCallback() {
    const img = this.attributes.img.value;

    this.innerHTML = `
      <div class="police-tape">
        <div class="police-tape__content" style="background-image: url('${img}')"></div>
      </div>
      `;
  }
}

customElements.define("police-tape", PoliceTape);
