import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"
import getTemplate from "./getTemplate.js"

class NameChanger extends PolymerElement {
    constructor() {
        super();
        this.name = "You Guyzzz";
        this.readOnly = false;
        this._handleNameChange = this._handleNameChange.bind(this);
    }

    static get properties() {
        return {
            name: {
                type: String,
                reflectToAttribute: true
            },
            readOnly: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            }
        }
    }

    static get template() {
        return getTemplate();
    }

    ready() {
        super.ready();
        this._handleReadOnly();
        this._setupClickHandler();
    }

    _setupClickHandler() {
        let button = this.shadowRoot.querySelector('button');
        if (button) {
            button.addEventListener('click', this._handleNameChange);
        }
    }

    _handleNameChange() {
        let inputValue = this.shadowRoot.querySelector('input');

        this.name = inputValue.value.trim();
        inputValue.value = "";
    }

    _handleReadOnly() {
        if (this.readOnly) {
            this.shadowRoot.querySelector('button').remove();
            this.shadowRoot.querySelector('input').remove();
        }
    }
}

customElements.define('name-changer', NameChanger);
