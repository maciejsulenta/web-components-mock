class Navbar extends HTMLElement {
  connectedCallback() {
    const menuItems = JSON.parse(this.attributes.name.value);
    
    this.innerHTML = `
      <nav class="nav">
        <div class="nav__logo">
          <a class="nav__logo__text" href="#home">flits</a>
        </div>
        <ul class="nav__list">
          ${menuItems.map((item) => `<li class="nav__item"><a class="nav__link" href="#${item}">${item.replace('-', ' ')}</a></li>`).join("")}
        </ul>
        <div class="nav__icon-container">
          <img class="nav__menu-icon" alt="menu-icon" src="assets/images/menuIcon.svg"/>
        </div>
        <div class="nav__burger-container">
          <div class="nav__burger-icon"/>
        </div>
      </nav>
      <div class="mobile-menu">
        ${menuItems.map((item) => `<a class="mobile-menu__item" href="#${item}">${item}</a>`).join("")}
      </div>
    `;

    this.burgerHandler();
  }

  burgerHandler() {
    const navBar = document.querySelector(".nav");
    const burgerContainer = document.querySelector(".nav__burger-container");
    const mobileMenuItems = document.querySelectorAll(".mobile-menu__item");  
    const mobileMenu = document.querySelector(".mobile-menu");
    const burgerIcon = document.querySelector(".nav__burger-icon");

    burgerContainer.addEventListener("click", () => {
      navBar.classList.toggle("nav--active");
      burgerIcon.classList.toggle("nav__burger-icon--active");
      mobileMenu.classList.toggle("mobile-menu--active");
      mobileMenuItems.forEach((item) => item.classList.toggle("mobile-menu__item--active"));
      document.body.classList.toggle("no-scroll");
    });

    mobileMenuItems.forEach((item) => item.addEventListener('click', () => {
      navBar.classList.remove("nav--active");
      mobileMenu.classList.remove("mobile-menu--active");
      burgerIcon.classList.remove("nav__burger-icon--active");
      mobileMenuItems.forEach((el) => el.classList.remove('mobile-menu__item--active'));
      document.body.classList.remove("no-scroll");
    }));
  }
}

customElements.define("nav-bar", Navbar);
