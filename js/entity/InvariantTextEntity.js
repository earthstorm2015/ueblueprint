import IEntity from "./IEntity"

export default class InvariantTextEntity extends IEntity {

    static lookbehind = "INVTEXT"
    static attributes = {
        value: String,
    }

    constructor(values) {
        super(values)
        /** @type {String} */ this.value
    }
}
