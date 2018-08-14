class MarqueeStateElement extends HTMLElement {
  set hass(hass) {
    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const stateStr = state ? state.state : 'unavailable';
    this.style.padding = '8px';
    const style = document.createElement('style');
    style.textContent = `
        .marquee {
          width: ${this.config.width};
        	line-height: ${this.config.height};
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .marquee p {
          display: inline-block;
          padding-left: ${this.config.startpos}%;
          animation: marquee ${this.config.speed}s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translate(0, 0); }
          ${this.config.wait}%  { transform: translate(0, 0); }
          100% { transform: translate(-120%, 0); }
        }
    `;
    this.innerHTML = `
      <div class="marquee"><p>${stateStr}</p></div>
    `;
    this.appendChild(style);

  }
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    if (!config.speed) {
      config.speed= 10;
    }
    if (!config.width) {
      config.width= '450px';
    }
    if (!config.height) {
      config.height= '50px';
    }
    if (!config.wait) {
      config.wait= '0';
    }
    if (config.wait != '0'){
      config.startpos = '0';
    } else {
      config.startpos = '100';
    }
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
  
}
customElements.define('marquee-state-element', MarqueeStateElement);