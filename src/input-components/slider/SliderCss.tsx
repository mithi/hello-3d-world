/** @jsx jsx */
import { css } from "@emotion/core"

const sliderCss = css`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #e91e63;
    width: 100%;
    height: 0.1rem;
    outline: none;
    border-radius: 0.2rem;
    &:hover,
    &:active {
        background: #673ab7;
    }
    &:hover&::-webkit-slider-thumb {
        border: 1px solid #673ab7;
    }
    &:hover&::-moz-range-thumb {
        border: 1px solid #673ab7;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 12px;
        height: 12px;
        background-color: #17212b;
        border: 3px solid #e91e63;
        border-radius: 6px;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        background: #17212b;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
        border: 0.25rem solid #e91e63;
    }
`

const sliderContainerCss = css`
    padding: 10px;
    background-color: #17212b;
    font-size: 10px;
    font-family: monaco;
    color: #009688;
    &:hover {
        color: #673ab7;
    }
`

export { sliderCss, sliderContainerCss }
