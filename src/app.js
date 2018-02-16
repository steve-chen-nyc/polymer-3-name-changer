import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"
import {apiUrl as api} from "./api.js"
import getTemplate from "./getTemplate.js"
import giphyTemplate from "./giphyTemplate.js"

class NameChanger extends PolymerElement {
    constructor() {
        super();
        this._handleNameChange = this._handleNameChange.bind(this);
    }

    static get properties() {
        return {
            name: {
                type: String,
                value: "You Guyzzz",
                reflectToAttribute: true,
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

    static get observers() {
        return [
            '_fetchGiphy(name)',
            '_handleReadOnly(readOnly)'
        ]
    }

    ready() {
        super.ready();
        this._setupClickHandler();
    }

    _fetchGiphy(name) {
        const url = api(name);

        fetch(url).then((response) => {
            if (response.status !== 200) {
                console.warn(`issue with api call ${response.status}`);
                return;
            }
            response.json().then((data) => {
                let slot = this.shadowRoot.querySelector('slot');
                if (slot && name) {
                    slot.innerHTML = giphyTemplate(data.data[0].images.fixed_height.url);
                }
            });
        }).catch(function(err) {
            console.warn("err" + err);
        });
    }

    _handleNameChange() {
        let inputValue = this.shadowRoot.querySelector('input');

        this.name = inputValue.value.trim();
        inputValue.value = "";
    }

    _handleReadOnly(changeRecord) {
        if (changeRecord) {
            this.shadowRoot.querySelector('button').remove();
            this.shadowRoot.querySelector('input').remove();
        }
    }

    _setupClickHandler() {
        let button = this.shadowRoot.querySelector('button');
        if (button) {
            button.addEventListener('click', this._handleNameChange);
        }
    }
}

customElements.define('name-changer', NameChanger);
