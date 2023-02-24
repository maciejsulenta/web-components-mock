class Team extends HTMLElement {
    connectedCallback() {
      const img = JSON.parse(this.attributes.img.value);      
      const socialIcons = JSON.parse(this.attributes.socialIcons.value);
      const socialLinks = JSON.parse(this.attributes.socialLinks.value);
      const positions = JSON.parse(this.attributes.positions.value);
      const names = JSON.parse(this.attributes.names.value);

      this.innerHTML = `
        <div class="team" id="team">
          <div class="team__swiper">
            <div class="swiper-wrapper">
              ${img.map((slide, index) => `
                <div class="swiper-slide swiper-slide--team">
                  <div class="team-slider">
                    <div class="team-slider__img-wrap">
                      <img class="team-slider__img" src="${slide}"/>
                    </div>
                    <div class="team-slider__content-wrap">
                      <div class="content">
                        <h3 class="content__position">${positions[index]}</h3>
                        <h2 class="content__name">${names[index]}</h2>
                        <description-small>Create something 100 people love, not something milion sorta likes.</description-small>
                        <div class="content__socials">
                          ${socialIcons.map((item, index) => `<a href="${socialLinks[index]}"><img src="${item}"/></a>`).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
              ).join('')}
            </div>
            <div class="swiper-pagination" id="swiper-pagination"></div>
          </div>
          <aside-section-info>team</aside-section-info>
        </div>
      `;

      this.initializeSwiper();
    }

    initializeSwiper() {
      const swiper1 = new Swiper(".team__swiper", {
        slidesPerView: 1,
        loop: true,
        centeredSlides: false,
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
        speed: 1500,
        pagination: {
          el:  '.swiper-pagination',
          type: 'bullets',
        }
      });
    }
  }
  
  customElements.define("team-section", Team);
  

 