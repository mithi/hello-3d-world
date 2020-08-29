enum DataSpecType {
    polygon = "polygon",
    points = "points",
    lines = "lines",
}

interface Polygon2dSpecs {
    x: Array<number>
    y: Array<number>
    borderColor: string
    borderOpacity: number
    fillColor: string
    fillOpacity: number
    borderSize: number
    type: DataSpecType.polygon
    id: string
}

interface Points2dSpecs {
    x: Array<number>
    y: Array<number>
    color: string
    opacity: number
    size: number
    type: DataSpecType.points
    id: string
}

interface Lines2dSpecs {
    x0: Array<number>
    y0: Array<number>
    x1: Array<number>
    y1: Array<number>
    color: string
    opacity: number
    size: number
    type: DataSpecType.lines
    id: string
}

interface Lines3dSpecs extends Lines2dSpecs {
    z0: Array<number>
    z1: Array<number>
}

interface Polygon3dSpecs extends Polygon2dSpecs {
    z: Array<number>
}

interface Points3dSpecs extends Points2dSpecs {
    z: Array<number>
}

type Data2dSpecs = Polygon2dSpecs | Lines2dSpecs | Points2dSpecs
type Data3dSpecs = Polygon3dSpecs | Lines3dSpecs | Points3dSpecs

const BODY_MESH_COLOR = "#ff6348"
const BODY_COLOR = "#FC427B"
const COG_COLOR = "#32ff7e"
const LEG_COLOR = "#EE5A24"
const SUPPORT_POLYGON_MESH_COLOR = "#3c6382"
const NORMAL_POINT_SIZE = 8
const BODY_MESH_OPACITY = 0.3
const BODY_OUTLINE_WIDTH = 5
const COG_SIZE = 14
const HEAD_SIZE = 14
const LEG_OUTLINE_WIDTH = 5
const SUPPORT_POLYGON_MESH_OPACITY = 0.2

const BODY: Polygon3dSpecs = {
    id: "body-hexagon",
    type: DataSpecType.polygon,
    borderOpacity: 1.0,
    borderColor: BODY_COLOR,
    borderSize: BODY_OUTLINE_WIDTH,
    fillOpacity: BODY_MESH_OPACITY,
    fillColor: BODY_MESH_COLOR,
    x: [100.0, 100.0, -100.0, -100.0, -100.0, 100.0, 100.0],
    y: [0.0, 100.0, 100.0, 0.0, -100.0, -100.0, 0.0],
    z: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0],
}

const BODY_POINTS: Points3dSpecs = {
    id: "body-points",
    type: DataSpecType.points,
    opacity: 1.0,
    color: BODY_COLOR,
    size: NORMAL_POINT_SIZE,
    x: [100.0, 100.0, -100.0, -100.0, -100.0, 100.0, 100.0],
    y: [0.0, 100.0, 100.0, 0.0, -100.0, -100.0, 0.0],
    z: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0],
}

const SUPPORT_POLYGON: Polygon3dSpecs = {
    id: "support-polygon",
    type: DataSpecType.polygon,
    borderOpacity: 0,
    borderColor: SUPPORT_POLYGON_MESH_COLOR,
    borderSize: 0,
    fillOpacity: SUPPORT_POLYGON_MESH_OPACITY,
    fillColor: SUPPORT_POLYGON_MESH_COLOR,
    x: [
        300.0,
        241.4213562373095,
        -241.42135623730948,
        -300.0,
        -241.42135623730954,
        241.42135623730948,
    ],
    y: [
        0.0,
        241.42135623730948,
        241.4213562373095,
        2.4492935982947064e-14,
        -241.42135623730948,
        -241.42135623730954,
    ],
    z: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
}

const LEG_LINES: Array<Lines3dSpecs> = [
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-0",
        x0: [100, 200, 300],
        y0: [0, 0, 0],
        z0: [100, 100, 100],
        x1: [200, 300, 300],
        y1: [0, 0, 0],
        z1: [100, 100, 0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-1",
        x0: [100.0, 170.71, 241.42],
        y0: [100.0, 170.71, 241.42],
        z0: [100.0, 100.0, 100.0],
        x1: [170.71, 241.42, 241.42],
        y1: [170.71, 241.42, 241.42],
        z1: [100, 100, 0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-2",
        x0: [-100.0, -170.71067811865476, -241.42135623730948],
        y0: [100.0, 170.71067811865476, 241.4213562373095],
        z0: [100.0, 100.0, 100.0],
        x1: [-170.71, -241.42, -241.42],
        y1: [170.71, 241.42, 241.42],
        z1: [100, 100, 0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-3",
        x0: [-100.0, -200.0, -300.0],
        y0: [0.0, 0, 0],
        z0: [100.0, 100.0, 100.0],
        x1: [-200, -300, -300],
        y1: [0, 0, 0],
        z1: [100, 100, 0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-4",
        x0: [-100.0, -170.71067811865476, -241.42135623730954],
        y0: [-100.0, -170.71067811865476, -241.42135623730948],
        z0: [100.0, 100.0, 100.0],
        x1: [-170.71, -241.42, -241.42],
        y1: [-170.71, -241.42, -241.42],
        z1: [100, 100, 0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.lines,
        id: "leg-5",
        x0: [100.0, 170.71067811865476, 241.42135623730948],
        y0: [-100.0, -170.71067811865476, -241.42135623730954],
        z0: [100.0, 100.0, 100.0],
        x1: [170, 241.42, 241.42],
        y1: [-170, -241.42, -241.24],
        z1: [100, 100, 0],
    },
]

const LEG_POINTS: Array<Points3dSpecs> = [
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "rightMiddleLegpoints0",
        x: [100.0, 200.0, 300.0, 300.0],
        y: [0.0, 0.0, 0.0, 0.0],
        z: [100.0, 100.0, 100.0, 0.0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "rightFrontLegpoints1",
        x: [100.0, 170.71067811865476, 241.4213562373095, 241.4213562373095],
        y: [100.0, 170.71067811865476, 241.42135623730948, 241.42135623730948],
        z: [100.0, 100.0, 100.0, 0.0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "leftFrontLegpoints2",
        x: [-100.0, -170.71067811865476, -241.42135623730948, -241.42135623730948],
        y: [100.0, 170.71067811865476, 241.4213562373095, 241.4213562373095],
        z: [100.0, 100.0, 100.0, 0.0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "leftMiddleLegpoints3",
        x: [-100.0, -200.0, -300.0, -300.0],
        y: [0.0, 1.2246467991473532e-14, 2.4492935982947064e-14, 2.4492935982947064e-14],
        z: [100.0, 100.0, 100.0, 0.0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "leftBackLegpoints4",
        x: [-100.0, -170.71067811865476, -241.42135623730954, -241.42135623730954],
        y: [-100.0, -170.71067811865476, -241.42135623730948, -241.42135623730948],
        z: [100.0, 100.0, 100.0, 0.0],
    },
    {
        opacity: 1.0,
        color: LEG_COLOR,
        size: LEG_OUTLINE_WIDTH,
        type: DataSpecType.points,
        id: "rightBackLegpoints5",
        x: [100.0, 170.71067811865476, 241.42135623730948, 241.42135623730948],
        y: [-100.0, -170.71067811865476, -241.42135623730954, -241.42135623730954],
        z: [100.0, 100.0, 100.0, 0.0],
    },
]

const MISC_POINTS: Array<Points3dSpecs> = [
    {
        color: COG_COLOR,
        opacity: 1,
        size: COG_SIZE,
        id: "centerOfGravity",
        type: DataSpecType.points,
        x: [0.0],
        y: [0.0],
        z: [100.0],
    },

    {
        color: BODY_COLOR,
        opacity: 1.0,
        size: HEAD_SIZE,
        id: "head",
        type: DataSpecType.points,
        x: [0.0],
        y: [100.0],
        z: [100.0],
    },
]

// ...LEG_LINES, ...LEG_POINTS, ...MISC_POINTS

const DATA = [
    SUPPORT_POLYGON,
    ...LEG_POINTS,
    ...LEG_LINES,
    BODY,
    BODY_POINTS,
    ...MISC_POINTS,
]
export default DATA
