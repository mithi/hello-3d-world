import React, { useState } from "react"
import {
    INIT_STATE as SCENE_SETTINGS_INIT_STATE,
    SceneSettings,
} from "./templates/scene-settings/"

const App = () => {
    const [sceneSettings, setSceneSettings] = useState(SCENE_SETTINGS_INIT_STATE)
    const logSceneSettingValue = (stateKey: string, value: number) =>
        setSceneSettings({ ...sceneSettings, [stateKey]: value })

    return (
        <div>
            <SceneSettings
                values={sceneSettings}
                setValueFunction={logSceneSettingValue}
            />
        </div>
    )
}

export default App
