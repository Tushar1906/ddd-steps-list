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
class DddStepsListItem extends DDDSuper(I18NMixin(LitElement)) {

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
      steps: { type: Number, reflect: true },
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
        display: flex;
        align-items: start;
        gap: var(--ddd-spacing-2, 8px);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      .step-circle {
          width: 2rem;
          height: 2rem;
          
          border-radius: 50%; 
         
          color: --ddd-theme-default-white;
          font-size: 1rem;
          
          font-weight: --ddd-font-weight-bold;
          margin-right: var(--ddd-spacing-4, 20px);
          background-color: var(--ddd-theme-default-beaverBlue, #caccd0);
          display: flex;
          justify-content: center;
          align-items: center;
         position: absolute;
          margin-top: --ddd-spacing-8;
          
        
         

        
        }
        :host([data-primary]) .step-circle {
          background-color: var(--ddd-theme-default-beaverBlue, #caccd0);
        }
        
      

    .new1 {
      border-left: var(--ddd-border-md);
      margin-left:--ddd-spacing-5;
      border-left-style: dashed;
      border-left-color: var(--ddd-theme-default-limestoneGray);}
      .new1::before {
        content: attr(data-step);
        position: absolute;
        left: -2.5rem;
        top: --ddd-spacing-0;
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
        font-weight: --ddd-font-weight-bold;
        color: var(--ddd-theme-default-beaverBlue, #caccd0);
      }
     
    

      .content {
        padding: var(--ddd-spacing-2, 8px);
        margin-left: --ddd-spacing-5;
       
        margin-bottom: --ddd-spacing-5;
      }
    
      
    
        .step-circle {
          margin-right: --ddd-spacing-0;
          margin-bottom: var(--ddd-spacing-2, 8px);
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
  <div class="step-circle">${this.steps}</div>
  
  <div class="new1">
  <div class="content"><slot></slot></div>
  
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

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);