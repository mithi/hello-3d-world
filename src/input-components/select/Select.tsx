/** @jsx jsx */
import { jsx } from "@emotion/core"
import { selectCss, selectContainerCss } from "./SelectCss"

const Select = () => (
    <div css={selectContainerCss}>
        <label>My label</label>
        <select css={selectCss}>
            <option>Option 234546242141241241</option>
            <option>Option 1</option>
            <option>Option 1</option>
        </select>
    </div>
)

export default Select
