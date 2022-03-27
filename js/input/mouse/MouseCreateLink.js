import IMouseClickDrag from "./IMouseClickDrag"
import LinkElement from "../../element/LinkElement"
import LinkMessageElement from "../../element/LinkMessageElement"

/**
 * @typedef {import("../../element/LinkElement").default} LinkElement
 * @typedef {import("../../element/PinElement").default} PinElement
 */
export default class MouseCreateLink extends IMouseClickDrag {

    /** @type {NodeListOf<PinElement>} */
    #listenedPins

    /** @type {(e: MouseEvent) => void} */
    #mouseenterHandler

    /** @type {(e: MouseEvent) => void} */
    #mouseleaveHandler

    /** @type {LinkElement} */
    link

    /** @type {PinElement} */
    enteredPin

    linkValid = false

    constructor(target, blueprint, options) {
        super(target, blueprint, options)
        /** @type {PinElement} */
        this.target

        let self = this
        this.#mouseenterHandler = e => {
            if (!self.enteredPin) {
                self.linkValid = false
                self.enteredPin = e.target
                const a = self.enteredPin, b = self.target
                if (a.getNodeElement() == b.getNodeElement()) {
                    this.setLinkMessage(LinkMessageElement.sameNode())
                } else if (a.isOutput() == b.isOutput()) {
                    this.setLinkMessage(LinkMessageElement.directionsIncompatible())
                } else if (a.isOutput() == b.isOutput()) {
                    this.setLinkMessage(LinkMessageElement.directionsIncompatible())
                } else if (self.blueprint.getLinks([a, b]).length) {
                    this.setLinkMessage(LinkMessageElement.replaceLink())
                    self.linkValid = true
                } else {
                    this.setLinkMessage(LinkMessageElement.correct())
                    self.linkValid = true
                }
            }
        }
        this.#mouseleaveHandler = e => {
            if (self.enteredPin == e.target) {
                self.enteredPin = null
                self.linkValid = false
                this.setLinkMessage(LinkMessageElement.placeNode())
            }
        }
    }

    startDrag() {
        this.link = new LinkElement(this.target, null)
        this.blueprint.nodesContainerElement.prepend(this.link)
        this.setLinkMessage(LinkMessageElement.placeNode())
        this.#listenedPins = this.blueprint.querySelectorAll(this.target.constructor.tagName)
        this.#listenedPins.forEach(pin => {
            if (pin != this.target) {
                pin.getClickableElement().addEventListener("mouseenter", this.#mouseenterHandler)
                pin.getClickableElement().addEventListener("mouseleave", this.#mouseleaveHandler)
            }
        })
        this.link.startDragging()
        this.link.setDestinationLocation(this.clickedPosition)
    }

    dragTo(location, movement) {
        this.link.setDestinationLocation(location)
    }

    endDrag() {
        this.#listenedPins.forEach(pin => {
            pin.removeEventListener("mouseenter", this.#mouseenterHandler)
            pin.removeEventListener("mouseleave", this.#mouseleaveHandler)
        })
        if (this.enteredPin) {
            this.blueprint.addGraphElement(this.link)
            this.link.setDestinationPin(this.enteredPin)
            this.link.setLinkMessage(null)
            this.link.finishDragging()
        } else {
            this.link.finishDragging()
            this.link.remove()
        }
        this.enteredPin = null
        this.link = null
        this.#listenedPins = null
    }

    setLinkMessage(linkMessage) {
        this.link.setLinkMessage(linkMessage)
    }
}
