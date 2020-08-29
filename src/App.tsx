/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState, FunctionComponent } from "react"
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

const Card: FunctionComponent = ({ children }) => (
    <div className="w-full md:w-1/2 lg:w-1/3">
        <div
            css={css`
                border-width: 1px;
                border-color: #673ab7;
                margin: 10px;
                background-color: #17212b;
                padding: 10px;
                border-radius: 20px;
            `}
        >
            {children}
        </div>
    </div>
)
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
        <div
            css={css`
                background-color: #17212b;
                padding: 5px;
            `}
            className="sm:flex"
        >
            <div
                css={css`
                    height: 100vh;
                `}
                className="w-full md:w-1/2 lg:w-2/3"
            >
                <BareMinimum2d {...bareMinimumProps} />
            </div>
            <Card>
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
            </Card>
        </div>
    )
}

export default App
