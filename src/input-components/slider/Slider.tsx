/** @jsx jsx */
import { jsx } from "@emotion/core"
import { sliderCss, sliderContainerCss } from "./SliderCss"
import sliderProps from "./type"

const Slider = ({ value, onChange, id, label, min, max, step }: sliderProps) => (
    <div css={sliderContainerCss}>
        <label htmlFor={id}>{label}</label>: <span>{value}</span>
        <input
            {...{
                min,
                max,
                step,
                value,
                type: "range",
                css: sliderCss,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(id, Number(e.target.value)),
            }}
        />
    </div>
)

export default Slider
