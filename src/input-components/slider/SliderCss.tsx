/** @jsx jsx */
import { css } from "@emotion/core"

const sliderCss = css`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 0.25rem;
    outline: none;
    border-radius: 0.25rem;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1.5rem;
        height: 1.5rem;
        background-color: #f44336;
        border: 0.25rem solid #fff;
        border-radius: 1rem;
        cursor: pointer;
    }
`

const sliderContainerCss = css`
    padding: 10px;
    background-color: #f44336;
`

export { sliderCss, sliderContainerCss }
