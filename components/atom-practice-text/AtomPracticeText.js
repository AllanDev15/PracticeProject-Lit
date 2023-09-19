import { LitElement, html } from "lit";
import { globalStyles } from "../../styles/globalStyles.js";
import { styles } from "./AtomPracticeText-styles.js";

export class AtomPracticeText extends LitElement {
  static properties = {
    text: {
      attribute: 'text',
      type: String
    }
  }

  static styles = [
    globalStyles,
    styles
  ];

  constructor() {
    super();

    this.text = '';
  }
  
  render() {
    return html`
      <p>${this.text}</p>
    `
  }
}