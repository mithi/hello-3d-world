type sliderCallback = (id: string, value: number) => void

type sliderProps = {
    value: number
    onChange: sliderCallback
    id: string
    label: string
    min: number
    max: number
    step: number
}

export default sliderProps
