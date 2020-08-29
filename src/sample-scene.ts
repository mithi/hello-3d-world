const edgeAxes = {
    intersectionPointColor: "#FFEB3B",
    intersectionPointSize: 3,
    xColor: "#F44336",
    yColor: "#2196F3",
    zColor: "#8BC34A",
    lineSize: 2,
    edgeOpacity: 1.0,
}

const worldAxes = {
    intersectionPointColor: "#8BC34A",
    intersectionPointSize: 3,
    xColor: "#E91E63",
    yColor: "#03A9F4",
    zColor: "#CDDC39",
    lineSize: 1,
    edgeOpacity: 1.0,
}

const cubeAxes = {
    intersectionPointColor: "#CDDC39",
    intersectionPointSize: 3,
    xColor: "#9C27B0",
    yColor: "#00BCD4",
    zColor: "#FFEB3B",
    lineSize: 1,
    edgeOpacity: 1.0,
}

const sceneOptions = {
    paper: { color: "#17212B", opacity: 1 },
    xyPlane: { color: "#0652DD", opacity: 1 },
    sceneEdges: { color: "#607D8B", opacity: 1 },
    crossLines: { color: "#795548", opacity: 1 },
    edgeAxes,
    worldAxes,
    cubeAxes,
}

export default sceneOptions
