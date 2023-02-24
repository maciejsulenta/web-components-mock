class ContactModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="modal">
        <div class="modal__backdrop"></div>
        <div class="modal__content">
          <div class="modal__text-wrap">
            <h2 class="modal__text">congrats!</h2>
            <h2 class="modal__text">you made the first step to success!</h2>
          </div>
          <div class="modal__socials-wrap">
            <p class="modal__desc">we in social media</p>
            <div class="modal__socials">
              <a href="https://facebook.com">
                <img src="../landing/assets/images/fbIcon.svg"/>
              </a>
              <a href="https://instagram.com">
                <img src="../landing/assets/images/igIcon.svg"/>
              </a>
              <a href="https://twitter.com">
                <img src="../landing/assets/images/twIcon.svg"/>
              </a>
              <a href="https://youtube.com">
                <img src="../landing/assets/images/ytIcon.svg"/>
              </a>
              <a href="https://linkedin.com">
                <img src="../landing/assets/images/liIcon.svg"/>
              </a>
            </div>
          </div>
        </div>  
      </div>
    `;

    this.handleModal();
  }

  handleModal() {
    const modal = document.querySelector(".modal");
    const backdrop = document.querySelector(".modal__backdrop");

    backdrop.addEventListener("click", () => {
      modal.classList.remove("modal--open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("modal--open")) {
        modal.classList.remove("modal--open");
      }
    });
  }
}

customElements.define("contact-modal", ContactModal);
