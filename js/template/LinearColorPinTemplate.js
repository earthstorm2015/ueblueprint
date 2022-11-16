import { html } from "lit"
import ColorPickerWindowTemplate from "./ColorPickerWindowTemplate"
import Configuration from "../Configuration"
import ElementFactory from "../element/ElementFactory"
import PinTemplate from "./PinTemplate"

/**
 * @typedef {import("../element/PinElement").default} PinElement
 * @typedef {import("../element/WindowElement").default} WindowElement
 * @typedef {import("../entity/LinearColorEntity").default} LinearColorEntity
 */

/** @extends PinTemplate<LinearColorEntity> */
export default class LinearColorPinTemplate extends PinTemplate {

    /** @type {HTMLInputElement} */
    #input

    /** @type {WindowElement} */
    #window

    #launchColorPickerWindow =
        /** @param {MouseEvent} e */
        e => {
            e.preventDefault()
            this.element.blueprint.setFocused(true)
            this.#window = /** @type {WindowElement} */ (
                new (ElementFactory.getConstructor("ueb-window"))({
                    type: ColorPickerWindowTemplate,
                    windowOptions: {
                        // The created window will use the following functions to get and set the color
                        getPinColor: () => this.element.defaultValue,
                        /** @param {LinearColorEntity} color */
                        setPinColor: color => this.element.setDefaultValue(color),
                    },
                })
            )
            this.element.blueprint.append(this.#window)
            const windowApplyHandler = () => {
                this.element.setDefaultValue(
                /** @type {ColorPickerWindowTemplate} */(this.#window.template).color
                )
            }
            const windowCloseHandler = () => {
                this.#window.removeEventListener(Configuration.windowApplyEventName, windowApplyHandler)
                this.#window.removeEventListener(Configuration.windowCloseEventName, windowCloseHandler)
                this.#window = null
            }
            this.#window.addEventListener(Configuration.windowApplyEventName, windowApplyHandler)
            this.#window.addEventListener(Configuration.windowCloseEventName, windowCloseHandler)
        }

    /** @param {Map} changedProperties */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties)
        this.#input = this.element.querySelector(".ueb-pin-input")
    }

    renderInput() {
        return html`
            <span class="ueb-pin-input" data-linear-color="${this.element.defaultValue.toString()}"
                @click="${this.#launchColorPickerWindow}"
                style="--ueb-linear-color: rgba(${this.element.defaultValue.toString()})">
            </span>
        `
    }
}
