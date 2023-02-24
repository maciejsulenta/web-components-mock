class WhyUs extends HTMLElement {
  connectedCallback() {
    const img = JSON.parse(this.attributes.img.value);
    const alts = JSON.parse(this.attributes.altData.value);

    this.innerHTML = `
      <div class="why-us" id="why-we">
        <div class="why-us__content-wrap">
          <div class="why-us__img-wrap">
            ${img
              .map(
                (item, index) =>
                  `<img class="why-us__img" src="${item}" alt="${alts[index]}"/>`
              )
              .join("")}
          </div>
          <div class="why-us__text-wrap">
            <div class="why-us__text-item">
              <subtitle-text>We'll save your time</subtitle-text>
              <description-tiny>
                Time is money, so we'll make that work for you effortlessly, without interrupting your pace. We'll take care of lots of people hearing about you.
              </description-tiny>
            </div>
            <div class="why-us__text-item">
              <subtitle-text>We'll save your time</subtitle-text>
              <description-tiny>
                You do what you love, while we create your personal brand that'll work for you and bring extra income.
              </description-tiny>
            </div>
            <div class="why-us__text-item">
              <subtitle-text>We'll suggest the best approach</subtitle-text>
              <description-tiny>
                There's a lot of personal brand development strategies, and we'll choose the one that suits you personally.
              </description-tiny>
            </div>
          </div>
        </div>
        <aside-section-info>why us?</aside-section-info>
      </div>
    `;

    this.sliderHandler();
  }

  sliderHandler() {
    window.addEventListener("DOMContentLoaded", (e) => {
      const slider = document.querySelector(".why-us__img-wrap");
      const slides = slider.getElementsByTagName("img");

      const animationCompleted = (e) => {
        slider.appendChild(slides[0]);
      };

      Array.from(slides).forEach((item) => {
        item.addEventListener("animationend", animationCompleted);
      });
    });
  }
}

customElements.define("why-us", WhyUs);
