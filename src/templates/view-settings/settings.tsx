const INIT_STATE = {
    camTx: 0.0,
    camTy: 0.0,
    camTz: 2.0,
    cubeRx: 0,
    cubeRy: 0,
    cubeRz: 0,
    camZoom: 3.1,
    canvasToViewRatio: 300,
    defaultCamZoffset: 5,
    defaultCamOrientation: "z-forward-x-left",
}

const defaultCamStateProps = {
    id: "n-v-default-cam-orientation",
    options: ["z-forward-x-left", "z-up-x-left", "z-up-x-forward", "z-forward-x-right"],
    label: "default camera orientation",
}

const sliderStateIds = [
    "n-v-cam-tx",
    "n-v-cam-ty",
    "n-v-cam-tz",
    "n-v-cube-rx",
    "n-v-cube-ry",
    "n-v-cube-rz",
    "n-v-cam-zoom",
    "n-v-canvas-to-view-ratio",
    "n-v-default-cam-z-offset",
]

const stateIds: string[] = [...sliderStateIds, defaultCamStateProps.id]

const translateParams = { min: -5, max: 5, step: 0.01 }
const rotateParams = { min: -180, max: 180, step: 0.1 }

type sliderParams = {
    min: number
    max: number
    step: number
    label: string
    id: string
}
const sliderProps: Record<string, sliderParams> = {
    "n-v-cam-tx": { ...translateParams, label: "tx", id: "n-v-cam-tx" },
    "n-v-cam-ty": { ...translateParams, label: "ty", id: "n-v-cam-ty" },
    "n-v-cam-tz": { ...translateParams, label: "tz", id: "n-v-cam-tz" },
    "n-v-cube-rx": { ...rotateParams, label: "rx", id: "n-v-cube-rx" },
    "n-v-cube-ry": { ...rotateParams, label: "ry", id: "n-v-cube-ry" },
    "n-v-cube-rz": { ...rotateParams, label: "rz", id: "n-v-cube-rz" },
    "n-v-cam-zoom": {
        min: 0,
        max: 30,
        step: 0.1,
        label: "zoom",
        id: "n-v-cam-zoom",
    },
    "n-v-canvas-to-view-ratio": {
        min: 100,
        max: 1200,
        step: 1,
        label: "canvasToViewRatio",
        id: "n-v-canvas-to-view-ratio",
    },
    "n-v-default-cam-z-offset": {
        min: -20,
        max: 20,
        step: 0.1,
        label: "camZoffset",
        id: "n-v-default-cam-z-offset",
    },
}

const idToStateMap: Record<string, string> = {
    "n-v-cam-tx": "camTx",
    "n-v-cam-ty": "camTy",
    "n-v-cam-tz": "camTz",
    "n-v-cube-rx": "cubeRx",
    "n-v-cube-ry": "cubeRy",
    "n-v-cube-rz": "cubeRz",
    "n-v-cam-zoom": "camZoom",
    "n-v-default-cam-z-offset": "defaultCamZoffset",
    "n-v-canvas-to-view-ratio": "canvasToViewRatio",
    "n-v-default-cam-orientation": "defaultCamOrientation",
}

export {
    stateIds,
    INIT_STATE,
    sliderProps,
    idToStateMap,
    sliderStateIds,
    defaultCamStateProps,
}
