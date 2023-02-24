class SendButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#contacts"><button class="send-button">send request</button></a>
    `;
  }
}

customElements.define("send-button", SendButton);
