/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const sliderCss = css`
    width: 98%;
    background-color: hotpink;
    -webkit-appearance: none;
    height: 4px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    margin: 6px;
    &:hover {
        background: orange;
        height: 8px;
        margin: 4px;
    }
    &:active {
        background: orange;
        height: 8px;
        margin: 4px;
    }
    &::-webkit-slider-thumb {
        background: rgb(46, 204, 113);
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
        border: 0;
    }
    &::-moz-range-thumb {
        background: rgb(46, 204, 113);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
        border: 0;
    }
`

const sliderContainerCss = css`
    padding: 5px;
`

const labelCss = css`
    font-family: courier;
    width: 100%;
    color: rgb(46, 204, 113);
    font-size: 1rem;
    white-space: nowrap;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 0.3rem;
    margin-top: 5px;
`

const TempSlider = () => {
    return (
        <div css={sliderContainerCss}>
            <div css={labelCss}>
                <label>slider </label>: <span>0.7</span>
            </div>
            <input type="range" min={0} max={1} step={0.01} value={0.7} css={sliderCss} />
        </div>
    )
}

export default TempSlider
