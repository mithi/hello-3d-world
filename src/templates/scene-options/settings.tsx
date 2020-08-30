const INIT_STATE: Record<string, boolean> = {
    showWorldAxes: false,
    showEdgeAxes: true,
    showCubeAxes: false,
    showXYplane: true,
    showCrosslines: true,
    showCubeEdges: true,
}

const idToStateMap: Record<string, string> = {
    "b-show-xy-plane": "showXYplane",
    "b-show-crosslines": "showCrosslines",
    "b-show-cube-edges": "showCubeEdges",
    "b-show-world-axes": "showWorldAxes",
    "b-show-edge-axes": "showEdgeAxes",
    "b-show-cube-axes": "showCubeAxes",
}
const stateIds = Object.keys(idToStateMap)

export { idToStateMap, stateIds, INIT_STATE }
