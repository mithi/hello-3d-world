const INIT_STATE: Record<string, boolean> = {
    showWorldAxes: true,
    showEdgeAxes: true,
    showCubeAxes: true,
    showCubeEdgeAxes: true,
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
const stateIds = [
    "b-show-xy-plane",
    "b-show-crosslines",
    "b-show-cube-edges",
    "b-show-world-axes",
    "b-show-edge-axes",
    "b-show-cube-axes",
]

export { idToStateMap, stateIds, INIT_STATE }
