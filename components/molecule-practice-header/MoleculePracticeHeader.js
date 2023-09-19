import { LitElement, html } from "lit";
import { globalStyles } from "../../styles/globalStyles.js";
import { styles } from "./MoleculePracticeHeader-styles.js";

import '../atom-practice-text/index.js'

export class MoleculePracticeHeader extends LitElement {
  static properties = {
    name: {
      attribute: 'name',
      type: String
    },
    _greetings: {
      attribute: false,
      type: String,
      state: true
    }
  }

  static styles = [
    globalStyles,
    styles
  ];

  constructor() {
    super();

    this.name = '';
    this._greetings = '';
  }

  get _getGreetings() {
    // TODO dada la hora indicarle al usuario el saludo correspondiente
    // TODO si hora = 12:00am to 12:00pm buenos dias
    // TODO si hora > 12:00pm to 6:00 pm buenas tardes
    // TODO si hora > a 6:00pm y menor a 12:00pm buenas noches
    return `Hola ${this.name}`;
  }

  render() {
    return html`
    <div class='header'>
      <img src="" alt="icon" class='header-Icon'>
      <!-- 
      continuar la construcción del header
      haciendo uso de componentes ATOMICOS
      Revisar import ⬆️
      Ejemplo:
      -->
      <atom-practice-text class="header-Text" text="${this._getGreetings}"></atom-practice-text>
    </div>
    `
  }
}