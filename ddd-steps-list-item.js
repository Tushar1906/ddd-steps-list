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
class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    this.steps = 0;
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      step: { type: Number, attribute: 'step', reflect: true },
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
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
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
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: var(--ddd-spacing-0);
         

        
        }
        .header {
          display: inline-flex;
          align-items: center;
          
        }

    .new1 {
      border-left: var(--ddd-border-md);
      margin-left:10px;
      border-left-style: dashed;
      border-left-color: var(--ddd-theme-default-limestoneGray);}
    

      .content {
       display: block;
       gap: var(--ddd-spacing-2);
       margin-left: (--ddd-spacing-0);
       padding: var(--ddd-spacing-2);
      }
      img {
        width: 100%;
        height: auto;
        margin: var(--ddd-spacing-0);
      }


    `];
  }

  // Lit render the HTML
  render() {
    return html`
  <div class="wrapper">
  <div class="step-circle">${this.step}</div>
  <div class="header">
  <div class="new1">
  <div class="content"><slot></slot></div>
  </div>
  </div>
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