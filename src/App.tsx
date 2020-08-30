import React, { useState } from "react"
import { Layout, TwoColumnRow } from "./Layout"
import BareMinimum2d from "bare-minimum-2d"
import renderScene from "@mithi/bare-minimum-3d"
import {
    sampleSceneOptions as sceneOptionsData,
    pyramidData3d,
    hexapodData3d,
} from "./data"

import {
    SCENE_OPTIONS_INIT_STATE,
    SCENE_SETTINGS_INIT_STATE,
    VIEW_SETTINGS_INIT_STATE,
    SceneOptions,
    ViewSettings,
    SceneSettings,
} from "./templates"

import Select from "./input-components/select/Select"
import { Data3dSpecs } from "@mithi/bare-minimum-3d/lib/cjs/primitive-types"

const partialSceneOptionsData = (sceneOptions: Record<string, boolean>) => {
    const {
        showWorldAxes,
        showEdgeAxes,
        showCubeAxes,
        showXYplane,
        showCrosslines,
        showCubeEdges,
    } = sceneOptions

    return {
        paper: sceneOptionsData.paper,
        xyPlane: showXYplane ? sceneOptionsData.xyPlane : undefined,
        sceneEdges: showCubeEdges ? sceneOptionsData.sceneEdges : undefined,
        crossLines: showCrosslines ? sceneOptionsData.crossLines : undefined,
        edgeAxes: showEdgeAxes ? sceneOptionsData.edgeAxes : undefined,
        worldAxes: showWorldAxes ? sceneOptionsData.worldAxes : undefined,
        cubeAxes: showCubeAxes ? sceneOptionsData.cubeAxes : undefined,
    }
}

const menuOptions = ["view-settings", "scene-options", "scene-settings"]
const dataOptions = ["hexapod", "pyramid", "none"]
const data3d: Record<string, Array<Data3dSpecs>> = {
    hexapod: hexapodData3d,
    pyramid: pyramidData3d,
    none: [],
}

const App = () => {
    const [sceneSettings, setSceneSettings] = useState(SCENE_SETTINGS_INIT_STATE)
    const [viewSettings, setViewSettings] = useState(VIEW_SETTINGS_INIT_STATE)
    const [sceneOptions, setSceneOptions] = useState(SCENE_OPTIONS_INIT_STATE)
    const [currentMenu, setCurrentMenu] = useState(menuOptions[0])
    const [currentData, setCurrentData] = useState(dataOptions[0])

    const logCurrentMenu = (_: string, value: string) => setCurrentMenu(value)
    const logCurrentData = (_: string, value: string) => setCurrentData(value)

    const logSceneSettings = (stateKey: string, value: number) =>
        setSceneSettings({ ...sceneSettings, [stateKey]: value })

    const logViewSettings = (stateKey: string, value: number | string) =>
        setViewSettings({ ...viewSettings, [stateKey]: value })

    const logSceneOptions = (stateKey: string, value: boolean) =>
        setSceneOptions({ ...sceneOptions, [stateKey]: value })

    const newSceneOptionsData = partialSceneOptionsData(sceneOptions)
    const bareMinimumProps = renderScene(
        viewSettings,
        sceneSettings,
        newSceneOptionsData,
        data3d[currentData]
    )

    return (
        <Layout>
            <Layout.Main>
                <a href="https://github.com/mithi/bare-minimum-3d">
                    Mithi's Bare Minimum 3d Library
                </a>

                <BareMinimum2d {...bareMinimumProps} />
            </Layout.Main>
            <Layout.Side>
                <TwoColumnRow
                    left={
                        <Select
                            id="current-menu"
                            options={menuOptions}
                            onChange={logCurrentMenu}
                            value={currentMenu}
                        />
                    }
                    right={
                        <Select
                            id="current-data"
                            options={dataOptions}
                            onChange={logCurrentData}
                            value={currentData}
                        />
                    }
                />
                <div hidden={currentMenu !== "scene-settings"}>
                    <SceneSettings
                        values={sceneSettings}
                        setValueFunction={logSceneSettings}
                    />
                </div>
                <div hidden={currentMenu !== "view-settings"}>
                    <ViewSettings
                        values={viewSettings}
                        setValueFunction={logViewSettings}
                    />
                </div>

                <div hidden={currentMenu !== "scene-options"}>
                    <SceneOptions
                        values={sceneOptions}
                        setValueFunction={logSceneOptions}
                    />
                </div>
            </Layout.Side>
        </Layout>
    )
}

export default App
