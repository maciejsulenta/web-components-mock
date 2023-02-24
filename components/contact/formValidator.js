export class FormValidator {
  isValid = false;

  get form() {
    return document.querySelector("#form");
  }

  get formFields() {
    return [...document.querySelectorAll('[data-form-element="field"]')];
  }

  get formErrors() {
    return [...document.querySelectorAll(".form__message")];
  }

  get formButton() {
    return document.querySelector(".form__button");
  }

  get modal() {
    return document.querySelector(".modal");
  }

  constructor() {
    this.init();
  }

  init() {
    this.formFields.forEach((field, index) =>
      field.addEventListener("keyup", () => {
        this.validateField(field, index);
        this.enableSubmit();
      })
    );
  }

  validateField(field, index) {
    if (field.checkValidity()) {
      this.formErrors[index].textContent = "";
      this.isValid = true;
    } else {
      this.formErrors[index].textContent = field.dataset.patternError;
      this.isValid = false;
      return;
    }
  }

  enableSubmit() {
    for (let i = 0; i < this.formFields.length; i++) {
      let field = this.formFields[i];

      if (!field.checkValidity()) {
        this.isValid = false;
        break;
      }
    }

    this.formButton.disabled = !this.isValid;
  }

  submitForm() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.modal.classList.toggle("modal--open");
      this.form.reset();
      this.formButton.disabled = true;
    });
  }
}
