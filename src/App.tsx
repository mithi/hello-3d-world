import React, { useState } from "react"
import {
    INIT_STATE as SCENE_SETTINGS_INIT_STATE,
    SceneSettings,
} from "./templates/scene-settings/"
import {
    INIT_STATE as VIEW_SETTINGS_INIT_STATE,
    ViewSettings,
} from "./templates/view-settings/"
import Select from "./input-components/select/Select"

const App = () => {
    const [sceneSettings, setSceneSettings] = useState(SCENE_SETTINGS_INIT_STATE)
    const [viewSettings, setViewSettings] = useState(VIEW_SETTINGS_INIT_STATE)
    const [currentMenu, setCurrentMenu] = useState("scene-settings")
    const menuOptions = ["scene-settings", "view-settings"]

    const logCurrentMenu = (id: string, value: string) => setCurrentMenu(value)
    const logSceneSettings = (stateKey: string, value: number) =>
        setSceneSettings({ ...sceneSettings, [stateKey]: value })

    const logViewSettings = (stateKey: string, value: number | string) =>
        setViewSettings({ ...viewSettings, [stateKey]: value })

    return (
        <div>
            <Select
                id="current-menu"
                options={menuOptions}
                onChange={logCurrentMenu}
                value={currentMenu}
            />
            {currentMenu === "scene-settings" ? (
                <SceneSettings
                    values={sceneSettings}
                    setValueFunction={logSceneSettings}
                />
            ) : null}
            {currentMenu === "view-settings" ? (
                <ViewSettings values={viewSettings} setValueFunction={logViewSettings} />
            ) : null}
        </div>
    )
}

export default App
