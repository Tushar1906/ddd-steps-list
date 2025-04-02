/**
 * Copyright 2025 Tushar1906
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.title = "";
    this.step = 0;
  
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      step: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      .circle {
          width: 200px;
          height: 200px;
          line-height: 200px;
          border-radius: 50%; 
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          text-align: center;
          color: white;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0 auto 40px;
          background-color: var(--ddd-theme-nittanyNavy);}


    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="step-circle">${this.step}</div>
  <div class="step-content"><slot></slot></div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);