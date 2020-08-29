/** @jsx jsx */
import { jsx } from "@emotion/core"
import { selectCss, selectContainerCss } from "./SelectCss"

type propType = {
    id: string
    options: string[]
    label: string
    value: string
    onChange: (id: string, value: string) => void
}
const Select = ({ id, options, label, value, onChange }: propType) => (
    <div css={selectContainerCss}>
        <label>{label}</label>
        <select
            css={selectCss}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(id, e.target.value)
            }
        >
            {options.map(option => (
                <option key={id + option}>{option}</option>
            ))}
        </select>
    </div>
)

export default Select
