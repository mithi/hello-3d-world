/** @jsx jsx */
import { jsx } from "@emotion/core"
import { sliderCss, sliderContainerCss } from "./SliderCss"

const Slider = () => (
    <div css={sliderContainerCss}>
        <label>My label</label> : <span>70</span>
        <input css={sliderCss} type="range" min="0" max="100" value="70" />
    </div>
)

export default Slider
