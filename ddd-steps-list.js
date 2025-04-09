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
    this.dddPrimary= false;


  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      children: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
       
      }
      .wrapper {
        display: block;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        gap: var(--ddd-spacing-2);
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
     

    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
      <div class="list">
        <slot id="list-slot" ></slot>
      </div>
      </div>
    `;
  }
  updated(changedProperties) {
    if (changedProperties.has("title")) {
      this.countChildren();
    }
  }

  countChildren() {
    const items = this.querySelectorAll("ddd-steps-list-item");
    items.forEach((element, index) => {
      element.count = index + 1;
    });
  }

  validateChildren() {
    const slot = this.shadowRoot.querySelector("#list-slot");
    if (!slot) {
      console.error("Slot #list-slot not found in shadowRoot.");
      return;
    }
    const assignedElements = slot.assignedElements({
      flatten: true,
    }); 

    assignedElements.forEach((child) => {
      if (child.tagName.toLowerCase() !== "ddd-steps-list-item") {
        console.warn(`Invalid tag`);
        child.remove();
      }
    });
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