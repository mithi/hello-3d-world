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
        border: 0.15rem solid #673ab7;
    }
    &:hover&::-moz-range-thumb {
        border: 0.15rem solid #673ab7;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1.5rem;
        height: 1.5rem;
        background-color: black;
        border: 0.15rem solid #e91e63;
        border-radius: 1rem;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        background: black;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
        border: 0.25rem solid #e91e63;
    }
`

const sliderContainerCss = css`
    padding: 10px;
    background-color: black;
    font-size: 15px;
    font-family: monaco;
    color: #e91e63;
    &:hover {
        color: #673ab7;
    }
`

export { sliderCss, sliderContainerCss }
