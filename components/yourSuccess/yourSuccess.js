class YourSuccess extends HTMLElement {
  connectedCallback() {
    const subtitle = JSON.parse(this.attributes.subtitles.value);
    const img = JSON.parse(this.attributes.img.value);
    const description = JSON.parse(this.attributes.desc.value);

    this.innerHTML = `
      <div class="your-success">
        <div class="swiper">
          <div class="swiper-wrapper">
            ${subtitle.map((item, index) => `
              <div class="swiper-slide">
                <div class="swiper-slide-wrap">
                  <h2 class="swiper-slide__number">0${index + 1}</h2>
                  <subtitle-text>${item}</subtitle-text>
                  <img class="swiper-slide__img" src="${img[index]}"/>
                  <description-small>${description[index]}</description-small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <aside-section-info>steps to your success</aside-section-info>
      </div>
    `;

   this.initializeSwiper();
  }

  initializeSwiper() {
    const swiper = new Swiper(".swiper", {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      autoplay: {
        disableOnInteraction: false,
        delay: 1500,
      },
      speed: 1000,
      breakpoints: {
        679: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 3.5,
          spaceBetween: 40,
          loop: false,
          centeredSlides: true,
          autoplay: false,
        },
      },
    });
  }
}

customElements.define("your-success", YourSuccess);
