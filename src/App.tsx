import React, { useState } from "react"
import Slider from "./input-components/slider/Slider"
//import Select from "./input-components/select/Select"
//import Checkbox from "./input-components/checkbox/Checkbox"

import sceneSettingsParams from "./templates/scene-settings/scene-settings"
import sceneSettingsSliderParams from "./templates/scene-settings/type"

const sliders = (
    settings: {
        stateIds: string[]
        idToStateMap: Record<string, string>
        sliderProps: Record<string, sceneSettingsSliderParams>
    },
    values: Record<string, number>,
    setValueFunction: (id: string, value: number) => void
) =>
    settings.stateIds.map((id: string) => {
        return (
            <Slider
                {...{
                    onChange: setValueFunction,
                    key: id,
                    value: values[settings.idToStateMap[id]],
                    ...settings.sliderProps[id],
                }}
            />
        )
    })

const App = () => {
    const [sceneSettings, setSceneSettings] = useState(sceneSettingsParams.INIT_STATE)
    const logSceneSettingValue = (id: string, value: number) => {
        const stateName = sceneSettingsParams.idToStateMap[id]
        setSceneSettings({ ...sceneSettings, [stateName]: value })
    }
    const { stateIds, idToStateMap, sliderProps } = sceneSettingsParams

    return (
        <div>
            {sliders(
                { stateIds, idToStateMap, sliderProps },
                sceneSettings,
                logSceneSettingValue
            )}
        </div>
    )
}

export default App
