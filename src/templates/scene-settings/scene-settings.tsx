import sliderParams from "./type"

const stateIds = [
    "n-s-cube-range",
    "n-s-cube-z-offset",
    "n-s-paper-x-range",
    "n-s-paper-y-range",
    "n-s-data-z-offset",
]

const sliderProps: Record<string, sliderParams> = {
    "n-s-cube-range": {
        default: 600,
        min: 100,
        max: 1200,
        step: 1,
        label: "cubeR",
        id: "n-s-cube-range",
    },
    "n-s-cube-z-offset": {
        default: 1,
        min: -1,
        max: 1,
        step: 0.01,
        label: "cubeZoff",
        id: "n-s-cube-z-offset",
    },
    "n-s-data-z-offset": {
        default: 0,
        min: -1,
        max: 1,
        step: 0.01,
        label: "dataZoff",
        id: "n-s-data-z-offset",
    },
    "n-s-paper-x-range": {
        default: 600,
        min: 100,
        max: 1200,
        step: 1,
        label: "paperX",
        id: "n-s-paper-x-range",
    },
    "n-s-paper-y-range": {
        default: 600,
        min: 100,
        max: 1200,
        step: 1,
        label: "paperY",
        id: "n-s-paper-y-range",
    },
}

const INIT_STATE: Record<string, number> = {
    cubeRange: 600,
    cubeZoffset: 1,
    dataZoffset: 0,
    paperXrange: 600,
    paperYrange: 600,
}

const idToStateMap: Record<string, string> = {
    "n-s-cube-range": "cubeRange",
    "n-s-cube-z-offset": "cubeZoffset",
    "n-s-paper-x-range": "dataZoffset",
    "n-s-paper-y-range": "paperXrange",
    "n-s-data-z-offset": "paperYrange",
}

const sceneSettingsParams = { stateIds, INIT_STATE, sliderProps, idToStateMap }
export default sceneSettingsParams
