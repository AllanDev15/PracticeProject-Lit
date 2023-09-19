import { LitElement, html } from "lit";
import { styles } from "./PagePrimerPagina-styles.js";
import { globalStyles } from '../../styles/globalStyles.js'
// Componentes a usar
import "../../components/molecule-practice-header/index.js";

export class PagePrimerPagina extends LitElement {
  static properties = {
    headerName: {
      attribute: 'header-name',
      type: String
    }
  }

  static styles = [
    globalStyles,
    styles
  ];

  constructor() {
    super();

    this.headerName = '';
  }

  render() {
    return html`
      <molecule-practice-header name="${this.headerName}"></molecule-practice-header>
    `;
  }
}