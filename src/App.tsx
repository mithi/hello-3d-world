import React, { useState } from "react"
import Layout from "./Layout"
import BareMinimum2d from "bare-minimum-2d"
import bareMinimumProps from "./sample"
import {
    INIT_STATE as SCENE_SETTINGS_INIT_STATE,
    SceneSettings,
} from "./templates/scene-settings/"

import {
    INIT_STATE as VIEW_SETTINGS_INIT_STATE,
    ViewSettings,
} from "./templates/view-settings/"

import {
    INIT_STATE as SCENE_OPTIONS_INIT_STATE,
    SceneOptions,
} from "./templates/scene-options/"

import Select from "./input-components/select/Select"

const App = () => {
    const [sceneSettings, setSceneSettings] = useState(SCENE_SETTINGS_INIT_STATE)
    const [viewSettings, setViewSettings] = useState(VIEW_SETTINGS_INIT_STATE)
    const [sceneOptions, setSceneOptions] = useState(SCENE_OPTIONS_INIT_STATE)
    const [currentMenu, setCurrentMenu] = useState("scene-settings")
    const menuOptions = ["scene-settings", "view-settings", "scene-options"]

    const logCurrentMenu = (_: string, value: string) => setCurrentMenu(value)

    const logSceneSettings = (stateKey: string, value: number) =>
        setSceneSettings({ ...sceneSettings, [stateKey]: value })

    const logViewSettings = (stateKey: string, value: number | string) =>
        setViewSettings({ ...viewSettings, [stateKey]: value })

    const logSceneOptions = (stateKey: string, value: boolean) =>
        setSceneOptions({ ...sceneOptions, [stateKey]: value })

    return (
        <Layout>
            <Layout.Main>
                <BareMinimum2d {...bareMinimumProps} />
            </Layout.Main>
            <Layout.Side>
                <Select
                    id="current-menu"
                    options={menuOptions}
                    onChange={logCurrentMenu}
                    value={currentMenu}
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
