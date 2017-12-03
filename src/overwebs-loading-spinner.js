import { GluonElement, html } from '../gluonjs/gluon.js';

class OverwebsLoadingSpinner extends GluonElement {
  get template() {
    return html`
    <style>
      @keyframes overwebs-loading-spinner {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        20% {
          opacity: 0;
          transform: scale(0.5);
        }

        45% {
          opacity: 0;
          transform: scale(0.5);
        }

        65% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      :host {
        display: inline-block;
        line-height: 0; // Remove additional height around svg
      }

      svg {
        width: calc(52 / 1920 * var(--overwebs-window-size, 1920px));
        height: calc(52 / 1920 * var(--overwebs-window-size, 1920px));
      }

      :host([white]) path {
        fill: #ffffff;
      }

      path {
        animation-duration: 2.3s;
        animation-name: overwebs-loading-spinner;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(.215, .61, .355, 1);
      }

      #one {
        animation-delay: 0s;
      }

      #two {
        animation-delay: 0.15s;
      }

      #three {
        animation-delay: 0.3s;
      }

      #four {
        animation-delay: 0.45s;
      }

      #five {
        animation-delay: 0.6s;
      }

      #six {
        animation-delay: 0.75s;
      }

      #seven {
        animation-delay: 0.9s;
      }
    </style>
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576">
      <g transform="translate(189.5 119)">
        <path id="one"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(386.5 119)">
        <path id="two"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(485 288)">
        <path id="three"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(386.5 457)">
        <path id="four"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(189.5 457)">
        <path id="five"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(91 288)">
        <path id="six"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
      <g transform="translate(288 288)">
        <path id="seven"
        d="M-14.5 -95.6215
        a29 29 0 0 1 29 0
        l61.066641993582 35.256842193501
        a29 29 0 0 1 14.5 25.114736709749
        l0 70.513684387002
        a29 29 0 0 1 -14.5 25.114736709749
        l-61.066641993582 35.256842193501
        a29 29 0 0 1 -29 0
        l-61.066641993582 -35.256842193501
        a29 29 0 0 1 -14.5 -25.114736709749
        l1.1230431185007e-13 -70.513684387002
        a29 29 0 0 1 14.5 -25.114736709749">
        </path>
      </g>
    </svg>`;
  }

  static get observedAttributes() {
    return ['size'];
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.getAttribute('size') !== null) {
      this._sizeChanged();
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'size') {
      this._sizeChanged();
    }
  }

  _sizeChanged() {
    if (this.$) {
      this.$.svg.style.height = this.$.svg.style.width = `calc(${this.size} / 1920 * var(--overwebs-window-size, 1920px))`;
    }
  }

  set size(size) {
    this.setAttribute('size', size);
  }

  get size() {
    const value = this.getAttribute('size');
    return value === null ? '52' : value;
  }
}

customElements.define(OverwebsLoadingSpinner.is, OverwebsLoadingSpinner);
