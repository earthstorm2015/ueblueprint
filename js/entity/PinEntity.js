import GuidEntity from "./GuidEntity"
import IEntity from "./IEntity"
import LocalizedTextEntity from "./LocalizedTextEntity"
import ObjectReferenceEntity from "./ObjectReferenceEntity"
import PinReferenceEntity from "./PinReferenceEntity"
import TypeInitialization from "./TypeInitialization"

/**
 * @typedef {{
 *     PinCategory: String,
 *     PinSubCategory: String,
 *     PinSubCategoryObject: ObjectReferenceEntity,
 *     PinSubCategoryMemberReference: *,
 *     PinValueType: String,
 *     ContainerType: ObjectReferenceEntity,
 *     bIsReference: Boolean,
 *     bIsConst: Boolean,
 *     bIsWeakPointer: Boolean,
 *     bIsUObjectWrapper: Boolean,
 * }} PinTypeObjectType
 */
export default class PinEntity extends IEntity {

    static lookbehind = "Pin"
    static attributes = {
        PinId: GuidEntity,
        PinName: "",
        PinFriendlyName: new TypeInitialization(LocalizedTextEntity, false, null),
        PinToolTip: "",
        Direction: new TypeInitialization(String, false, ""),
        PinType: {
            PinCategory: "",
            PinSubCategory: "",
            PinSubCategoryObject: ObjectReferenceEntity,
            PinSubCategoryMemberReference: null,
            PinValueType: null,
            ContainerType: ObjectReferenceEntity,
            bIsReference: false,
            bIsConst: false,
            bIsWeakPointer: false,
            bIsUObjectWrapper: false,
        },
        LinkedTo: [PinReferenceEntity],
        DefaultValue: "",
        AutogeneratedDefaultValue: "",
        PersistentGuid: GuidEntity,
        bHidden: false,
        bNotConnectable: false,
        bDefaultValueIsReadOnly: false,
        bDefaultValueIsIgnored: false,
        bAdvancedView: false,
        bOrphanedPin: false,
    }

    isInput() {
        return !this.bHidden && this.Direction !== "EGPD_Output"
    }

    isOutput() {
        return !this.bHidden && this.Direction === "EGPD_Output"
    }

    isConnected() {
        return this.LinkedTo?.length > 0 ?? false
    }

    /**
     * @param {String} targetObjectName
     * @param {PinEntity} targetPinEntity
     */
    linkTo(targetObjectName, targetPinEntity) {
        /** @type {PinReferenceEntity[]} */
        this.LinkedTo
        const pinExists = !this.LinkedTo.find(
            /** @type {PinReferenceEntity} */
            pinReferenceEntity => {
                return pinReferenceEntity.objectName == targetObjectName
                    && pinReferenceEntity.pinGuid == targetPinEntity.PinId
            })
        if (pinExists) {
            this.LinkedTo.push(new PinReferenceEntity({
                objectName: targetObjectName,
                pinGuid: targetPinEntity.PinId
            }))
            return true
        }
        return false
    }

    /**
     * @param {String} targetObjectName
     * @param {PinEntity} targetPinEntity
     */
    unlinkFrom(targetObjectName, targetPinEntity) {
        /** @type {PinReferenceEntity[]} */
        this.LinkedTo
        const indexElement = this.LinkedTo.findIndex(
            /** @type {PinReferenceEntity} */
            pinReferenceEntity => {
                return pinReferenceEntity.objectName == targetObjectName
                    && pinReferenceEntity.pinGuid == targetPinEntity.PinId
            })
        if (indexElement >= 0) {
            this.LinkedTo.splice(indexElement, 1)
            return true
        }
        return false
    }

    getType() {
        return this.PinType.PinCategory
    }
}
