/** @jsx jsx */
import { jsx } from "@emotion/core"
import { checkboxCss, checkboxContainerCss } from "./CheckboxCss"

type propType = {
    id: string
    label: string
    value: boolean
    onChange: (id: string, value: string) => void
}
const Checkbox = ({ label, value, id, onChange }: propType) => (
    <div css={[checkboxCss, checkboxContainerCss]}>
        <input
            className="styled-checkbox"
            id={id}
            type="checkbox"
            value={value === true ? "1" : "0"}
            checked={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(id, e.target.value)
            }
        />
        <label htmlFor={id}>{label}</label>
    </div>
)

export default Checkbox
