const INIT_STATE: Record<string, number> = {
    cubeRange: 600,
    cubeZoffset: 1,
    dataZoffset: 0,
    paperXrange: 600,
    paperYrange: 600,
}

type sliderParams = {
    min: number
    max: number
    step: number
    label: string
    id: string
}

const stateIds = [
    "n-s-cube-range",
    "n-s-cube-z-offset",
    "n-s-paper-x-range",
    "n-s-paper-y-range",
    "n-s-data-z-offset",
]

const sliderProps: Record<string, sliderParams> = {
    "n-s-cube-range": {
        min: 100,
        max: 1200,
        step: 1,
        label: "cubeR",
        id: "n-s-cube-range",
    },
    "n-s-cube-z-offset": {
        min: -1,
        max: 1,
        step: 0.01,
        label: "cubeZoff",
        id: "n-s-cube-z-offset",
    },
    "n-s-data-z-offset": {
        min: -1,
        max: 1,
        step: 0.01,
        label: "dataZoff",
        id: "n-s-data-z-offset",
    },
    "n-s-paper-x-range": {
        min: 100,
        max: 1200,
        step: 1,
        label: "paperX",
        id: "n-s-paper-x-range",
    },
    "n-s-paper-y-range": {
        min: 100,
        max: 1200,
        step: 1,
        label: "paperY",
        id: "n-s-paper-y-range",
    },
}
const idToStateMap: Record<string, string> = {
    "n-s-cube-range": "cubeRange",
    "n-s-cube-z-offset": "cubeZoffset",
    "n-s-paper-x-range": "paperYrange",
    "n-s-paper-y-range": "paperXrange",
    "n-s-data-z-offset": "dataZoffset",
}

export { stateIds, INIT_STATE, sliderProps, idToStateMap }
