import React from "react"
import Slider from "../../input-components/slider/Slider"

import * as settings from "./settings"

type propType = {
    values: Record<string, number | string>
    setValueFunction: (id: string, value: number | string) => void
}

const ViewSettings = ({ values, setValueFunction }: propType) => {
    const setValue = (id: string, value: number | string) =>
        setValueFunction(settings.idToStateMap[id], value)

    return (
        <div>
            {settings.sliderStateIds.map((id: string) => (
                <Slider
                    {...{
                        onChange: setValue,
                        key: id,
                        value: values[settings.idToStateMap[id]] as number,
                        ...settings.sliderProps[id],
                    }}
                />
            ))}
        </div>
    )
}

export default ViewSettings
