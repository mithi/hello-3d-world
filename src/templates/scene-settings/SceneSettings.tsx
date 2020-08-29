import React from "react"
import Slider from "../../input-components/slider/Slider"
import * as settings from "./scene-settings"

type propType = {
    values: Record<string, number>
    setValueFunction: (id: string, value: number) => void
}

const SceneSettings = ({ values, setValueFunction }: propType) => {
    const setValue = (id: string, value: number) =>
        setValueFunction(settings.idToStateMap[id], value)

    return (
        <div>
            {settings.stateIds.map((id: string) => (
                <Slider
                    {...{
                        onChange: setValue,
                        key: id,
                        value: values[settings.idToStateMap[id]],
                        ...settings.sliderProps[id],
                    }}
                />
            ))}
        </div>
    )
}

export default SceneSettings
