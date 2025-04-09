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
class DddStepsList extends DDDSuper(LitElement) {

  static get tag() {
    return "ddd-steps-list-item";
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
      step: { type: Number, reflect: true },
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
        gap: var(--ddd-spacing-2);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      .step-circle {
          width: 2rem;
          height: 2rem;
          border-radius: 50%; 
          text-align: center;
          color: white;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: bold;
          margin-right: var(--ddd-spacing-2);
          background-color: var(--ddd-theme-default-beaverBlue, #caccd0);
          display: flex;
          justify-content: center;
          align-items: center;

        
        }


      :host([data-primary]) .circle {
      background-color: var(--ddd-theme-default-beaverBlue, #1e407c);
      color: white;
    }
    .new {
      border-left: var(--ddd-border-md);
      margin-left:10px;
      border-left-style: dashed;
      border-left-color: var(--ddd-theme-default-limestoneGray);}
    

      .step-content {
        flex: 1;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }


    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper"></div>
  <div class="step-circle">${this.step}</div>
  <div class="new">
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