class Questions extends HTMLElement {
    connectedCallback() {
      const questions = JSON.parse(this.attributes.questions.value);
      const answers = JSON.parse(this.attributes.answers.value);

      this.innerHTML = `
        <div class="questions">
          <div class="questions__swiper">
            <div class="swiper-wrapper">
              ${questions.map((item, index) => `
                <div class="swiper-slide" id="swiper-slide--questions">
                  <div class="questions-slide">
                    <div class="questions-slide__inner">
                      <div class="questions-slide__inner--front">
                        <p class="text-question">${item}</p>
                      </div>
                      <div class="questions-slide__inner--back">
                        <p class="text-answer text-answer--bold">Answer:</p>
                        <p class="text-answer">${answers[index]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <img class="questions__hand-icon" src="../landing/assets/images/hand1.png"/>
          <aside-section-info>Q&A</aside-section-info>
        </div>
      `;

      this.initializeSwiper();
      this.cardRotateHandler();
    }

    initializeSwiper() {
      const swiper1 = new Swiper('.questions__swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        breakpoints: {
          679: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 20,
          },
        }
      })
    }

    cardRotateHandler() {
      const cards = document.querySelectorAll('.questions-slide__inner');

      cards.forEach((item) => item.addEventListener('click', () => item.classList.toggle('rotate-card')))
    }
  }
  
  customElements.define("questions-section", Questions);
  