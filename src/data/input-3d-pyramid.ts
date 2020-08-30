import {
    DataSpecType,
    Polygon3dSpecs,
    Points3dSpecs,
    Lines3dSpecs,
} from "@mithi/bare-minimum-3d/lib/cjs/primitive-types"

/**

1             2
*------*------*
|             |
|      0      |
*------*------*
|             |
|             |
*------*------*
3             4
 */
const r = 100
const p = [
    { x: 0, y: 0, z: 2 * r },
    { x: -r, y: r, z: 0 },
    { x: r, y: r, z: 0 },
    { x: -r, y: -r, z: 0 },
    { x: r, y: -r, z: 0 },
]

const square: Polygon3dSpecs = {
    id: "pyramid-ground-plane",
    type: DataSpecType.polygon,
    borderOpacity: 0,
    borderColor: "#00ff00",
    borderSize: 0,
    fillOpacity: 0.25,
    fillColor: "#ff0000",
    x: [1, 2, 4, 3].map(i => p[i].x),
    y: [1, 2, 4, 3].map(i => p[i].y),
    z: [1, 2, 4, 3].map(i => p[i].z),
}

const start = [1, 2, 4, 3, 1, 2, 3, 4]
const end = [2, 4, 3, 1, 0, 0, 0, 0]

const lines: Lines3dSpecs = {
    opacity: 1.0,
    color: "#00ff00",
    size: 3,
    type: DataSpecType.lines,
    id: "pyramid-edges",
    x0: start.map(i => p[i].x),
    y0: start.map(i => p[i].y),
    z0: start.map(i => p[i].z),
    x1: end.map(i => p[i].x),
    y1: end.map(i => p[i].y),
    z1: end.map(i => p[i].z),
}

const points: Points3dSpecs = {
    id: "pyramid-vertices",
    type: DataSpecType.points,
    opacity: 1.0,
    color: "#00ff00",
    size: 5,
    x: [0, 1, 2, 3, 4].map(i => p[i].x),
    y: [0, 1, 2, 3, 4].map(i => p[i].y),
    z: [0, 1, 2, 3, 4].map(i => p[i].z),
}

export default [square, lines, points]
