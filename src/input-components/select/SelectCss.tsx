/** @jsx jsx */
import { css } from "@emotion/core"

const selectCss = css`
    border-width: 1px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    font-size: 10px;
    width: 98%;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-color: #e91e63;
    background-color: #17212b;
    color: #e91e63;
    &:hover,
    &:active {
        background-color: #673ab7;
        border-color: #673ab7;
        color: #17212b;
    }
    &:focus {
        outline: none;
    }
`

const selectContainerCss = css`
    padding: 10px;
    color: #009688;
    &:hover {
        color: #673ab7;
    }
`
export { selectCss, selectContainerCss }
