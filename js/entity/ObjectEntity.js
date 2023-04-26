import Configuration from "../Configuration.js"
import FormatTextEntity from "./FormatTextEntity.js"
import FunctionReferenceEntity from "./FunctionReferenceEntity.js"
import GuidEntity from "./GuidEntity.js"
import IdentifierEntity from "./IdentifierEntity.js"
import IEntity from "./IEntity.js"
import IntegerEntity from "./IntegerEntity.js"
import LinearColorEntity from "./LinearColorEntity.js"
import MacroGraphReferenceEntity from "./MacroGraphReferenceEntity.js"
import ObjectReferenceEntity from "./ObjectReferenceEntity.js"
import PinEntity from "./PinEntity.js"
import SVGIcon from "../SVGIcon.js"
import SymbolEntity from "./SymbolEntity.js"
import UnionType from "./UnionType.js"
import UnknownPinEntity from "./UnknownPinEntity.js"
import Utility from "../Utility.js"
import VariableReferenceEntity from "./VariableReferenceEntity.js"

export default class ObjectEntity extends IEntity {

    static attributes = {
        Class: {
            type: ObjectReferenceEntity,
        },
        Name: {
            default: "",
        },
        AxisKey: {
            type: SymbolEntity,
            showDefault: false,
        },
        InputAxisKey: {
            type: SymbolEntity,
            showDefault: false,
        },
        bIsPureFunc: {
            default: false,
            showDefault: false,
        },
        bIsConstFunc: {
            default: false,
            showDefault: false,
        },
        VariableReference: {
            type: VariableReferenceEntity,
            default: null,
            showDefault: false,
        },
        SelfContextInfo: {
            type: SymbolEntity,
            default: null,
            showDefault: false,
        },
        DelegatePropertyName: {
            type: String,
            showDefault: false,
        },
        DelegateOwnerClass: {
            type: ObjectReferenceEntity,
            showDefault: false,
        },
        ComponentPropertyName: {
            type: String,
            showDefault: false,
        },
        EventReference: {
            type: FunctionReferenceEntity,
            default: null,
            showDefault: false,
        },
        FunctionReference: {
            type: FunctionReferenceEntity,
            default: null,
            showDefault: false,
        },
        CustomFunctionName: {
            type: String,
            showDefault: false,
        },
        TargetType: {
            type: ObjectReferenceEntity,
            default: null,
            showDefault: false,
        },
        MacroGraphReference: {
            type: MacroGraphReferenceEntity,
            default: null,
            showDefault: false,
        },
        Enum: {
            type: ObjectReferenceEntity,
            showDefault: false,
        },
        EnumEntries: {
            type: [String],
            showDefault: false,
            inlined: true,
        },
        InputKey: {
            type: SymbolEntity,
            showDefault: false,
        },
        bOverrideFunction: {
            type: Boolean,
            showDefault: false,
        },
        bInternalEvent: {
            type: Boolean,
            showDefault: false,
        },
        bConsumeInput: {
            type: Boolean,
            showDefault: false,
        },
        bExecuteWhenPaused: {
            type: Boolean,
            showDefault: false,
        },
        bOverrideParentBinding: {
            type: Boolean,
            showDefault: false,
        },
        bControl: {
            type: Boolean,
            showDefault: false,
        },
        bAlt: {
            type: Boolean,
            showDefault: false,
        },
        bShift: {
            type: Boolean,
            showDefault: false,
        },
        bCommand: {
            type: Boolean,
            showDefault: false,
        },
        CommentColor: {
            type: LinearColorEntity,
            showDefault: false,
        },
        bCommentBubbleVisible_InDetailsPanel: {
            type: Boolean,
            showDefault: false,
        },
        bColorCommentBubble: {
            type: Boolean,
            default: false,
            showDefault: false,
        },
        R: {
            type: Number,
            showDefault: false,
        },
        G: {
            type: Number,
            showDefault: false,
        },
        MaterialExpression: {
            type: ObjectReferenceEntity,
            showDefault: false,
        },
        MoveMode: {
            type: SymbolEntity,
            showDefault: false,
        },
        TimelineName: {
            type: String,
            showDefault: false,
        },
        TimelineGuid: {
            type: GuidEntity,
            showDefault: false,
        },
        SizeX: {
            type: IntegerEntity,
            showDefault: false,
        },
        SizeY: {
            type: IntegerEntity,
            showDefault: false,
        },
        NodePosX: {
            type: IntegerEntity,
            showDefault: false,
        },
        NodePosY: {
            type: IntegerEntity,
            showDefault: false,
        },
        NodeWidth: {
            type: IntegerEntity,
            showDefault: false,
        },
        NodeHeight: {
            type: IntegerEntity,
            showDefault: false,
        },
        bCanRenameNode: {
            type: Boolean,
            showDefault: false,
        },
        bCommentBubblePinned: {
            type: Boolean,
            showDefault: false,
        },
        bCommentBubbleVisible: {
            type: Boolean,
            showDefault: false,
        },
        Text: {
            type: String,
            showDefault: false,
        },
        NodeComment: {
            type: String,
            showDefault: false,
        },
        AdvancedPinDisplay: {
            type: IdentifierEntity,
            default: null,
            showDefault: false,
        },
        EnabledState: {
            type: IdentifierEntity,
            default: null,
            showDefault: false,
        },
        NodeGuid: {
            type: GuidEntity,
            showDefault: false,
        },
        ErrorType: {
            type: IntegerEntity,
            showDefault: false,
        },
        ErrorMsg: {
            type: String,
            default: "",
            showDefault: false,
        },
        CustomProperties: {
            type: [new UnionType(PinEntity, UnknownPinEntity)],
        },
    }

    static nameRegex = /^(\w+?)(?:_(\d+))?$/
    static sequencerScriptingNameRegex = /\/Script\/SequencerScripting\.MovieSceneScripting(.+)Channel/
    static #keyName = {
        "A_AccentGrave": "à",
        "Add": "Num +",
        "C_Cedille": "ç",
        "Decimal": "Num .",
        "Divide": "Num /",
        "E_AccentAigu": "é",
        "E_AccentGrave": "è",
        "F1": "F1", // Otherwise F and number will be separated
        "F10": "F10",
        "F11": "F11",
        "F12": "F12",
        "F2": "F2",
        "F3": "F3",
        "F4": "F4",
        "F5": "F5",
        "F6": "F6",
        "F7": "F7",
        "F8": "F8",
        "F9": "F9",
        "Gamepad_Special_Left_X": "Touchpad Button X Axis",
        "Gamepad_Special_Left_Y": "Touchpad Button Y Axis",
        "Mouse2D": "Mouse XY 2D-Axis",
        "Multiply": "Num *",
        "Section": "§",
        "Subtract": "Num -",
        "Tilde": "`",
    }

    static {
        this.cleanupAttributes(this.attributes)
    }

    /** @param {String} value */
    static keyName(value) {
        let result = ObjectEntity.#keyName[value]
        if (result) {
            return result
        }
        result = Utility.numberFromText(value)?.toString()
        if (result) {
            return result
        }
        const match = value.match(/NumPad([a-zA-Z]+)/)
        if (match) {
            result = Utility.numberFromText(match[1])
            if (result) {
                return "Num " + result
            }
        }
    }

    constructor(values, suppressWarns = false) {
        let keys = Object.keys(values)
        if (keys.some(k => k.startsWith(Configuration.subObjectAttributeNamePrefix))) {
            let subObjectsValues = keys
                .filter(k => k.startsWith(Configuration.subObjectAttributeNamePrefix))
                .reduce(
                    (acc, k) => {
                        acc[k] = values[k]
                        return acc
                    },
                    {}
                )
            // Reorder sub objects to be the first entries
            values = {
                ...subObjectsValues,
                ...values,
            }
        }
        super(values, suppressWarns)
        /** @type {ObjectReferenceEntity} */ this.Class
        /** @type {String} */ this.Name
        /** @type {SymbolEntity?} */ this.AxisKey
        /** @type {SymbolEntity?} */ this.InputAxisKey
        /** @type {Boolean?} */ this.bIsPureFunc
        /** @type {Boolean?} */ this.bIsConstFunc
        /** @type {VariableReferenceEntity?} */ this.VariableReference
        /** @type {SymbolEntity?} */ this.SelfContextInfo
        /** @type {String?} */ this.DelegatePropertyName
        /** @type {ObjectReferenceEntity?} */ this.DelegateOwnerClass
        /** @type {FunctionReferenceEntity?} */ this.ComponentPropertyName
        /** @type {FunctionReferenceEntity?} */ this.EventReference
        /** @type {FunctionReferenceEntity?} */ this.FunctionReference
        /** @type {String} */ this.CustomFunctionName
        /** @type {ObjectReferenceEntity?} */ this.TargetType
        /** @type {MacroGraphReferenceEntity?} */ this.MacroGraphReference
        /** @type {ObjectReferenceEntity?} */ this.Enum
        /** @type {String[]?} */ this.EnumEntries
        /** @type {SymbolEntity?} */ this.InputKey
        /** @type {Boolean?} */ this.bOverrideFunction
        /** @type {Boolean?} */ this.bInternalEvent
        /** @type {Boolean?} */ this.bConsumeInput
        /** @type {Boolean?} */ this.bExecuteWhenPaused
        /** @type {Boolean?} */ this.bOverrideParentBinding
        /** @type {Boolean?} */ this.bControl
        /** @type {Boolean?} */ this.bAlt
        /** @type {Boolean?} */ this.bShift
        /** @type {Boolean?} */ this.bCommand
        /** @type {LinearColorEntity?} */ this.CommentColor
        /** @type {Boolean?} */ this.bCommentBubbleVisible_InDetailsPanel
        /** @type {Boolean?} */ this.bColorCommentBubble
        /** @type {Number?} */ this.R
        /** @type {Number?} */ this.G
        /** @type {ObjectReferenceEntity?} */ this.MaterialExpression
        /** @type {ObjectReferenceEntity?} */ this.MaterialExpressionComment
        /** @type {SymbolEntity?} */ this.MoveMode
        /** @type {String?} */ this.TimelineName
        /** @type {GuidEntity?} */ this.TimelineGuid
        /** @type {IntegerEntity?} */ this.SizeX
        /** @type {IntegerEntity?} */ this.SizeY
        /** @type {IntegerEntity} */ this.NodePosX
        /** @type {IntegerEntity} */ this.NodePosY
        /** @type {IntegerEntity?} */ this.NodeWidth
        /** @type {IntegerEntity?} */ this.NodeHeight
        /** @type {Boolean?} */ this.bCanRenameNode
        /** @type {Boolean?} */ this.bCommentBubblePinned
        /** @type {Boolean?} */ this.bCommentBubbleVisible
        /** @type {String?} */ this.Text
        /** @type {String?} */ this.NodeComment
        /** @type {IdentifierEntity?} */ this.AdvancedPinDisplay
        /** @type {IdentifierEntity?} */ this.EnabledState
        /** @type {GuidEntity} */ this.NodeGuid
        /** @type {IntegerEntity?} */ this.ErrorType
        /** @type {String?} */ this.ErrorMsg
        /** @type {(PinEntity | UnknownPinEntity)[]} */ this.CustomProperties

        // Legacy nodes cleanup
        if (this["Pins"] instanceof Array) {
            this["Pins"]
                .forEach(
                    /** @param {ObjectReferenceEntity} objectReference */
                    objectReference => {
                        const pinObject = this[Configuration.subObjectAttributeNameFromReference(objectReference, true)]
                        if (pinObject) {
                            const pinEntity = PinEntity.fromLegacyObject(pinObject)
                            pinEntity.LinkedTo = []
                            this.getCustomproperties(true).push(pinEntity)
                        }
                    })
            delete this["Pins"]
        }

        this.Class.sanitize()
        if (this.MacroGraphReference) {
            this.MacroGraphReference.MacroGraph?.sanitize()
            this.MacroGraphReference.GraphBlueprint?.sanitize()
        }
    }

    getClass() {
        return this.Class.path ? this.Class.path : this.Class.type
    }

    getType() {
        let classValue = this.getClass()
        if (this.MacroGraphReference?.MacroGraph?.path) {
            return this.MacroGraphReference.MacroGraph.path
        }
        if (this.MaterialExpression) {
            return this.MaterialExpression.type
        }
        return classValue
    }

    getObjectName(dropCounter = false) {
        if (dropCounter) {
            return this.getNameAndCounter()[0]
        }
        return this.Name
    }

    /** @returns {[String, Number]} */
    getNameAndCounter() {
        const result = this.getObjectName(false).match(ObjectEntity.nameRegex)
        let name = ""
        let counter = null
        if (result) {
            if (result.length > 1) {
                name = result[1]
            }
            if (result.length > 2) {
                counter = parseInt(result[2])
            }
            return [name, counter]
        }
        return ["", 0]
    }

    getCounter() {
        return this.getNameAndCounter()[1]
    }

    getNodeWidth() {
        return this.NodeWidth
            ?? this.isComment() ? Configuration.defaultCommentWidth : undefined
    }

    /** @param {Number} value */
    setNodeWidth(value) {
        if (!this.NodeWidth) {
            this.NodeWidth = new IntegerEntity()
        }
        this.NodeWidth.value = value
    }

    getNodeHeight() {
        return this.NodeHeight
            ?? this.isComment() ? Configuration.defaultCommentHeight : undefined
    }

    /** @param {Number} value */
    setNodeHeight(value) {
        if (!this.NodeHeight) {
            this.NodeHeight = new IntegerEntity()
        }
        this.NodeHeight.value = value
    }

    getNodePosX() {
        return this.NodePosX?.value ?? 0
    }

    /** @param {Number} value */
    setNodePosX(value) {
        if (!this.NodePosX) {
            this.NodePosX = new IntegerEntity()
        }
        this.NodePosX.value = Math.round(value)
    }

    getNodePosY() {
        return this.NodePosY?.value ?? 0
    }

    /** @param {Number} value */
    setNodePosY(value) {
        if (!this.NodePosY) {
            this.NodePosY = new IntegerEntity()
        }
        this.NodePosY.value = Math.round(value)
    }

    getCustomproperties(canCreate = false) {
        if (canCreate && !this.CustomProperties) {
            this.CustomProperties = []
        }
        return this.CustomProperties ?? []
    }

    /** @returns {PinEntity[]} */
    getPinEntities() {
        return this.getCustomproperties().filter(v => v.constructor === PinEntity)
    }

    switchTarget() {
        const switchMatch = this.getClass().match(Configuration.switchTargetPattern)
        if (switchMatch) {
            return switchMatch[1]
        }
    }

    isEvent() {
        switch (this.getClass()) {
            case Configuration.paths.customEvent:
            case Configuration.paths.event:
            case Configuration.paths.inputAxisKeyEvent:
            case Configuration.paths.inputVectorAxisEvent:
                return true
        }
        return false
    }

    isComment() {
        switch (this.getClass()) {
            case Configuration.paths.comment:
            case Configuration.paths.materialGraphNodeComment:
                return true
        }
        return false
    }

    isMaterial() {
        return this.getClass() === Configuration.paths.materialGraphNode
    }

    /** @return {ObjectEntity} */
    getMaterialSubobject() {
        const expression = this.MaterialExpression ?? this.MaterialExpressionComment
        return expression
            ? this[Configuration.subObjectAttributeNameFromReference(expression, true)]
            : null
    }

    isDevelopmentOnly() {
        const nodeClass = this.getClass()
        return this.EnabledState?.toString() === "DevelopmentOnly"
            || nodeClass.includes("Debug", Math.max(0, nodeClass.lastIndexOf(".")))
    }

    getHIDAttribute() {
        return this.InputKey ?? this.AxisKey ?? this.InputAxisKey
    }

    getDelegatePin() {
        return this.getCustomproperties().find(pin => pin.PinType.PinCategory === "delegate")
    }

    /** @returns {String} */
    nodeDisplayName() {
        switch (this.getType()) {
            case Configuration.paths.componentBoundEvent:
                return `${Utility.formatStringName(this.DelegatePropertyName)} (${this.ComponentPropertyName})`
            case Configuration.paths.createDelegate:
                return "Create Event"
            case Configuration.paths.customEvent:
                if (this.CustomFunctionName) {
                    return this.CustomFunctionName
                }
            case Configuration.paths.dynamicCast:
                if (!this.TargetType) {
                    return "Bad cast node" // Target type not found
                }
                return `Cast To ${this.TargetType?.getName()}`
            case Configuration.paths.enumLiteral:
                return `Literal enum ${this.Enum?.getName()}`
            case Configuration.paths.event:
                return `Event ${(this.EventReference?.MemberName ?? "").replace(/^Receive/, "")}`
            case Configuration.paths.executionSequence:
                return "Sequence"
            case Configuration.paths.forEachElementInEnum:
                return `For Each ${this.Enum?.getName()}`
            case Configuration.paths.forEachLoopWithBreak:
                return "For Each Loop with Break"
            case Configuration.paths.functionEntry:
                return "Construction Script"
            case Configuration.paths.ifThenElse:
                return "Branch"
            case Configuration.paths.spawnActorFromClass:
                return `SpawnActor ${Utility.formatStringName(
                    this.getCustomproperties().find(pinEntity => pinEntity.getType() == "class")?.DefaultObject?.getName()
                    ?? "NONE"
                )}`
            case Configuration.paths.switchEnum:
                return `Switch on ${this.Enum?.getName() ?? "Enum"}`
            case Configuration.paths.switchInteger:
                return `Switch on Int`
            case Configuration.paths.variableGet:
                return ""
            case Configuration.paths.variableSet:
                return "SET"
        }
        let switchTarget = this.switchTarget()
        if (switchTarget) {
            if (switchTarget[0] !== "E") {
                switchTarget = Utility.formatStringName(switchTarget)
            }
            return `Switch on ${switchTarget}`
        }
        const keyNameSymbol = this.getHIDAttribute()
        if (keyNameSymbol) {
            const keyName = keyNameSymbol.toString()
            let title = ObjectEntity.keyName(keyName) ?? Utility.formatStringName(keyName)
            if (this.getClass() === Configuration.paths.inputDebugKey) {
                title = "Debug Key " + title
            } else if (this.getClass() === Configuration.paths.getInputAxisKeyValue) {
                title = "Get " + title
            }
            return title
        }
        if (this.getClass() === Configuration.paths.macro) {
            return Utility.formatStringName(this.MacroGraphReference?.getMacroName())
        }
        if (this.isMaterial() && this.MaterialExpression) {
            const materialObject = /** @type {ObjectEntity} */(
                this[Configuration.subObjectAttributeNameFromReference(this.MaterialExpression, true)]
            )
            let result = materialObject.nodeDisplayName()
            result = result.match(/Material Expression (.+)/)?.[1] ?? result
            return result
        }
        let memberName = this.FunctionReference?.MemberName
        if (memberName) {
            const memberParent = this.FunctionReference.MemberParent?.path ?? ""
            if (memberName === "AddKey") {
                let result = memberParent.match(ObjectEntity.sequencerScriptingNameRegex)
                if (result) {
                    return `Add Key (${Utility.formatStringName(result[1])})`
                }
            }
            const memberNameTraceLineMatch = memberName.match(Configuration.lineTracePattern)
            if (memberNameTraceLineMatch) {
                return "Line Trace"
                    + (memberNameTraceLineMatch[1] === "Multi" ? " Multi " : " ")
                    + (memberNameTraceLineMatch[2] === ""
                        ? "By Channel"
                        : Utility.formatStringName(memberNameTraceLineMatch[2])
                    )
            }
            switch (memberParent) {
                case Configuration.paths.kismetMathLibrary:
                    if (memberName.startsWith("Conv_")) {
                        return "" // Conversion nodes do not have visible names
                    }
                    if (memberName.startsWith("Percent_")) {
                        return "%"
                    }
                    if (memberName.startsWith("EqualEqual_")) {
                        return "=="
                    }
                    const leadingLetter = memberName.match(/[BF]([A-Z]\w+)/)
                    if (leadingLetter) {
                        // Some functions start with B or F (Like FCeil, FMax, BMin)
                        memberName = leadingLetter[1]
                    }
                    switch (memberName) {
                        case "Abs": return "ABS"
                        case "Exp": return "e"
                        case "LineTraceSingle": return "Line Trace By Channel"
                        case "Max": return "MAX"
                        case "MaxInt64": return "MAX"
                        case "Min": return "MIN"
                        case "MinInt64": return "MIN"
                    }
                    break
                case Configuration.paths.blueprintSetLibrary:
                    {
                        const setOperationMatch = memberName.match(/Set_(\w+)/)
                        if (setOperationMatch) {
                            return Utility.formatStringName(setOperationMatch[1]).toUpperCase()
                        }
                    }
                    break
                case Configuration.paths.blueprintMapLibrary:
                    {
                        const setOperationMatch = memberName.match(/Map_(\w+)/)
                        if (setOperationMatch) {
                            return Utility.formatStringName(setOperationMatch[1]).toUpperCase()
                        }
                    }
                    break
            }
            return Utility.formatStringName(memberName)
        }
        return Utility.formatStringName(this.getNameAndCounter()[0])
    }

    nodeColor() {
        switch (this.getType()) {
            case Configuration.paths.materialExpressionConstant2Vector:
                return Configuration.nodeColors.yellow
            case Configuration.paths.materialExpressionTextureCoordinate:
                return Configuration.nodeColors.red
        }
        switch (this.getClass()) {
            case Configuration.paths.callFunction:
                return this.bIsPureFunc
                    ? Configuration.nodeColors.green
                    : Configuration.nodeColors.blue
            case Configuration.paths.dynamicCast:
                return Configuration.nodeColors.turquoise
            case Configuration.paths.inputDebugKey:
            case Configuration.paths.inputKey:
                return Configuration.nodeColors.red
            case Configuration.paths.createDelegate:
            case Configuration.paths.enumLiteral:
            case Configuration.paths.makeArray:
            case Configuration.paths.makeMap:
            case Configuration.paths.materialGraphNode:
            case Configuration.paths.select:
                return Configuration.nodeColors.green
            case Configuration.paths.executionSequence:
            case Configuration.paths.ifThenElse:
            case Configuration.paths.macro:
            case Configuration.paths.multiGate:
                return Configuration.nodeColors.gray
            case Configuration.paths.functionEntry:
                return Configuration.nodeColors.violet
            case Configuration.paths.timeline:
                return Configuration.nodeColors.yellow
        }
        if (this.switchTarget()) {
            return Configuration.nodeColors.lime
        }
        if (this.isEvent()) {
            return Configuration.nodeColors.red
        }
        if (this.bIsPureFunc) {
            return Configuration.nodeColors.green
        }
        return Configuration.nodeColors.blue
    }

    nodeIcon() {
        switch (this.getType()) {
            case Configuration.paths.addDelegate:
            case Configuration.paths.createDelegate:
            case Configuration.paths.functionEntry:
                return SVGIcon.node
            case Configuration.paths.customEvent: return SVGIcon.event
            case Configuration.paths.doN: return SVGIcon.doN
            case Configuration.paths.doOnce: return SVGIcon.doOnce
            case Configuration.paths.dynamicCast: return SVGIcon.cast
            case Configuration.paths.enumLiteral: return SVGIcon.enum
            case Configuration.paths.event: return SVGIcon.event
            case Configuration.paths.executionSequence:
            case Configuration.paths.multiGate:
                return SVGIcon.sequence
            case Configuration.paths.flipflop:
                return SVGIcon.flipflop
            case Configuration.paths.forEachElementInEnum:
            case Configuration.paths.forLoop:
            case Configuration.paths.forLoopWithBreak:
            case Configuration.paths.whileLoop:
                return SVGIcon.loop
            case Configuration.paths.forEachLoop:
            case Configuration.paths.forEachLoopWithBreak:
                return SVGIcon.forEachLoop
            case Configuration.paths.ifThenElse: return SVGIcon.branchNode
            case Configuration.paths.isValid: return SVGIcon.questionMark
            case Configuration.paths.makeArray: return SVGIcon.makeArray
            case Configuration.paths.makeMap: return SVGIcon.makeMap
            case Configuration.paths.makeSet: return SVGIcon.makeSet
            case Configuration.paths.select: return SVGIcon.select
            case Configuration.paths.spawnActorFromClass: return SVGIcon.spawnActor
            case Configuration.paths.timeline: return SVGIcon.timer
        }
        if (this.switchTarget()) {
            return SVGIcon.switch
        }
        if (this.nodeDisplayName().startsWith("Break")) {
            return SVGIcon.breakStruct
        }
        if (this.getClass() === Configuration.paths.macro) {
            return SVGIcon.macro
        }
        if (this.isMaterial()) {
            return undefined
        }
        const hidValue = this.getHIDAttribute()?.toString()
        if (hidValue) {
            if (hidValue.includes("Mouse")) {
                return SVGIcon.mouse
            } else if (hidValue.includes("Gamepad_Special")) {
                return SVGIcon.keyboard // This is called Touchpad in UE
            } else if (hidValue.includes("Gamepad") || hidValue.includes("Steam")) {
                return SVGIcon.gamepad
            } else if (hidValue.includes("Touch")) {
                return SVGIcon.touchpad
            } else {
                return SVGIcon.keyboard
            }
        }
        if (this.getDelegatePin()) {
            return SVGIcon.event
        }
        return SVGIcon.functionSymbol
    }
}
