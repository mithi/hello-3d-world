import React from "react"
import Checkbox from "../../input-components/checkbox/Checkbox"
import * as settings from "./settings"

type propType = {
    values: Record<string, boolean>
    setValueFunction: (id: string, value: boolean) => void
}

const SceneOptions = ({ values, setValueFunction }: propType) => {
    const setValue = (id: string, value: string) => {
        setValueFunction(settings.idToStateMap[id], value === "0" ? true : false)
    }

    return (
        <div>
            {settings.stateIds.map((id: string) => (
                <Checkbox
                    {...{
                        onChange: setValue,
                        key: id,
                        id,
                        value: values[settings.idToStateMap[id]],
                        label: settings.idToStateMap[id],
                    }}
                />
            ))}
        </div>
    )
}

export default SceneOptions
