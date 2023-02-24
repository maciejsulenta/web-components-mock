class Services extends HTMLElement {
    connectedCallback() {
      const subtitles = JSON.parse(this.attributes.subtitles.value);
      const desc = JSON.parse(this.attributes.desc.value);
      const img = this.attributes.img.value;
      const tasks = JSON.parse(this.attributes.tasks.value);

      this.innerHTML = `
        <div class="services" id="services">
          <div class="cards-wrap">
          
            <div class="cards-wrap__card cards-wrap__card--column">
              <div class="card-inner">
                <div class="card-inner--front">
                  <subtitle-text class="subtitle-text--center">${subtitles[0]}</subtitle-text>
                  <img class="card-inner__img" src="${img}"/>
                  <description-tiny>${desc[0]}</description-tiny>
                  <p class="card-inner__button">Details</p>
                </div>
                <div class="card-inner--back">
                  <h2 class="card-inner__subtitle">${subtitles[0]}</h2>
                  <p class="card-inner__desc card-inner__desc--bold">This includes:</p>
                  ${tasks.map((item) => `<p class="card-inner__desc">${item}</p>`).join('')}
                  <p class="card-inner__button">Details</p>
                </div>
              </div>
            </div>

            <div class="cards-wrap__card">
              <div class="card-inner">
                <div class="card-inner--front">
                  <subtitle-text class="subtitle-text--center">${subtitles[1]}</subtitle-text>
                  <description-tiny>${desc[1]}</description-tiny>
                  <p class="card-inner__button">Details</p>
                </div>
                <div class="card-inner--back">
                  <h2 class="card-inner__subtitle">${subtitles[1]}</h2>
                  <p class="card-inner__desc card-inner__desc--bold">This includes:</p>
                  ${tasks.slice(0,3).map((item) => `<p class="card-inner__desc">${item}</p>`).join('')}
                  <p class="card-inner__button">Details</p>
                </div>
              </div>
            </div>
            <div class="cards-wrap__card">
              <div class="card-inner">
                <div class="card-inner--front">
                  <subtitle-text class="subtitle-text--center">${subtitles[2]}</subtitle-text>
                  <description-tiny>${desc[2]}</description-tiny>
                  <p class="card-inner__button">Details</p>
                </div>
                <div class="card-inner--back">
                  <h2 class="card-inner__subtitle">${subtitles[2]}</h2>
                  <p class="card-inner__desc card-inner__desc--bold">This includes:</p>
                  ${tasks.slice(0,3).map((item) => `<p class="card-inner__desc">${item}</p>`).join('')}
                  <p class="card-inner__button">Details</p>
                </div>
              </div>
            </div>
          </div>
          <aside-section-info>services</aside-section-info>        
        </div>
      `;

      this.cardRotateHandler();
    }


    cardRotateHandler() {
      const cards = document.querySelectorAll('.card-inner');
      
      cards.forEach((item) => item.querySelectorAll('.card-inner__button').forEach((el) => el.addEventListener('click', () => item.classList.toggle('rotate-card'))))
    }
  }
  
  customElements.define("services-section", Services);
