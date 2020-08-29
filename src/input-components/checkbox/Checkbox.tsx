/** @jsx jsx */
import { jsx } from "@emotion/core"
import { checkboxCss, checkboxContainerCss } from "./CheckboxCss"

const Checkbox = () => (
    <div css={[checkboxCss, checkboxContainerCss]}>
        <input
            className="styled-checkbox"
            id="styled-checkbox-2"
            type="checkbox"
            value="value2"
        />
        <label htmlFor="styled-checkbox-2">CSS Only</label>
    </div>
)

export default Checkbox
