/** @jsx jsx */
import { css } from "@emotion/core"
const checkboxCss = css`
    .styled-checkbox {
        position: absolute; // take it out of document flow
        opacity: 0; // hide it

        & + label {
            position: relative;
            cursor: pointer;
            padding: 0;
        }

        // Box.
        & + label:before {
            content: "";
            margin-right: 10px;
            display: inline-block;
            vertical-align: text-top;
            width: 20px;
            height: 20px;
            background: #e91e63;
        }

        // Box hover
        &:hover + label:before {
            background: #673ab7;
        }

        // Box focus
        &:focus + label:before {
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
        }

        // Box checked
        &:checked + label:before {
            background: #e91e63;
        }

        // Checkmark. Could be replaced with an image
        &:checked + label:after {
            content: "";
            position: absolute;
            left: 5px;
            top: 9px;
            background: white;
            width: 2px;
            height: 2px;
            box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
                4px -6px 0 white, 4px -8px 0 white;
            transform: rotate(45deg);
        }
    }
`

const checkboxContainerCss = css`
    padding: 10px;
    background-color: black;
    font-size: 15px;
    font-family: monaco;
    padding: 10px;
    color: #e91e63;
    &:hover {
        color: #673ab7;
    }
`

export { checkboxCss, checkboxContainerCss }
