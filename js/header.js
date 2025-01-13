class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header flx flx-center">
        <a href="/index.html" class="header-logo flx flx-center">
          <img src="/assets/icons/logo.svg" alt="Logo">
        </a>
        <nav class="flx">
          <a href="#about-section" class="header-link">About</a>
          <a href="#portfolio-section" class="header-link">Portfolio</a>
        </nav>
      </header>
    `
  }
}

customElements.define('custom-header', Header);