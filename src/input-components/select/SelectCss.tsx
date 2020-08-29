/** @jsx jsx */
import { css } from "@emotion/core"

const selectCss = css`
    border-width: 3px;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    font-size: 15px;
    font-family: monaco;
    width: 98%;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-color: #e91e63;
    background-color: black;
    color: #e91e63;
    &:hover,
    &:active {
        background-color: #673ab7;
        border-color: #673ab7;
        color: black;
    }
    &:focus {
        outline: none;
    }
`

const selectContainerCss = css`
    padding: 10px;
    background-color: black;
    font-size: 15px;
    font-family: monaco;
    color: #e91e63;
    &:hover {
        color: #673ab7;
    }
`
export { selectCss, selectContainerCss }
