import Pointing from "./Pointing"

export default class MouseWheel extends Pointing {

    /**
     * 
     * @param {HTMLElement} target 
     * @param {import("../../Blueprint").default} blueprint 
     * @param {Object} options 
     */
    constructor(target, blueprint, options) {
        options.wantsFocusCallback = true
        super(target, blueprint, options)
        this.looseTarget = options?.looseTarget ?? true
        let self = this

        this.mouseWheelHandler = e => {
            e.preventDefault()
            const location = self.locationFromEvent(e)
            self.wheel(Math.sign(e.deltaY), location)
            return true
        }
        this.mouseParentWheelHandler = e => e.preventDefault()

        if (this.blueprint.focused) {
            this.movementSpace.addEventListener("wheel", this.mouseWheelHandler, false)
        }
    }

    blueprintFocused() {
        this.movementSpace.addEventListener("wheel", this.mouseWheelHandler, false)
        this.movementSpace.parentElement?.addEventListener("wheel", this.mouseParentWheelHandler)
    }

    blueprintUnfocused() {
        this.movementSpace.removeEventListener("wheel", this.mouseWheelHandler, false)
        this.movementSpace.parentElement?.removeEventListener("wheel", this.mouseParentWheelHandler)
    }

    /* Subclasses will override the following method */
    wheel(variation, location) {
    }
}
