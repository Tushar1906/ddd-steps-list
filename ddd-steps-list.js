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
    this.primary = false;

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      steps: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return 
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
     

    `;
  }

  // Lit render the HTML
  render() {
    return html`
      <slot @slotchange=${this._onSlotChange}></slot>
    `;
  }
  firstUpdated() {
    this._validateChildren();
  }

  _onSlotChange() {
    this._validateChildren();
  }
  _validateChildren() {
    const children = this.querySelectorAll("ddd-steps-list-item");
    if (children.length === 0) {
      console.warn("No children found");
      return;
    }
    children.forEach((child, index) => {
      child.setAttribute("step", index + 1);
    });
  }
  updated (changedProperties) {
    if (changedProperties.has("dddPrimary")) {
      const items = this.querySelectorAll("ddd-steps-list-item");
      items.forEach((item) => {
        item.setAttribute("data-primary", this.dddPrimary);
      });
      if (this.dddPrimary) {
        this.setAttribute("data-primary", true);
      } else {
        this.removeAttribute("data-primary");
      }
    }
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