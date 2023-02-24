import { FormValidator } from "./formValidator.js";

class Contact extends HTMLElement {
    connectedCallback() {
      const contact = JSON.parse(this.attributes.contactInfo.value);
      const links = JSON.parse(this.attributes.socialLinks.value);

      this.innerHTML = `
        <div class="contact" id="contacts">
          <div class="contact__wrap">
            <div class="form-wrap">
              <form class="form" id="form" method="POST" action="">
                <input 
                  value="Name"
                  type="text"
                  placeholder="Name"
                  id="name"
                  class="form__input"
                  required
                  minlength="3"
                  pattern="^[a-zA-Z]+$"
                  data-form-element="field"
                  data-pattern-error="Name must contain at least 3 characters and only letters."
                />
                <span class="form__message"></span>
                <input
                  value="Phone"
                  type="tel"
                  placeholder="Phone"
                  id="phoneNumber"
                  class="form__input"
                  required
                  minlength="9"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  data-form-element="field"
                  data-pattern-error="Phone number must contain only numbers"
                />
                <span class="form__message"></span>
                <textarea
                  placeholder="How can we help you?"
                  id="message"
                  class="form__input"
                  required
                  minlength="4"
                  maxlength="50"
                  data-form-element="field"
                  data-pattern-error="Message must be longer than 4 and shorter than 50 characters."
                >How can we help you?</textarea>
                <span class="form__message"></span>
                <button class="form__button" type="submit" disabled>send request</button>
              </form>
            </div>
            <div class="info-wrap">
              <subtitle-text>For other questions</subtitle-text>
              <div class="socials-wrap">
                ${contact.map((item, index) => `
                  <div class="socials-wrap__item">
                    <img src="../landing/assets/images/arrow1.svg"/>
                    <a class="socials-wrap__link" href="${links[index]}"><description-small>${item}</description-small></a>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <a href="#home" class="scroll-button">
            <img src="../landing/assets/images/arrow.png"/>
          </a>
          <aside-section-info>contact us</aside-section-info>
        </div>
      `;

      this.handleInput();
      
      const validate = new FormValidator();
      validate.submitForm();
    }

    handleInput() {
      const inputs = document.querySelectorAll('.form__input');

      inputs.forEach((item) => item.addEventListener('click', () => item.value="", {once: true}));
    }
  }
  
  customElements.define("contact-section", Contact);
  