import Form from "react-bootstrap/Form"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import RangeSlider from "react-bootstrap-range-slider"
import { useState } from "react"

function MainSearchYearSelection(props) {
    const years = props.data.map((year) => year.year)
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)
    const [sliderValue, setSliderValue] = useState((minYear + maxYear) / 2)
    const [sliderValue1, setSliderValue1] = useState(sliderValue + 1)
    const [isSwitchOn1, setIsSwitchOn1] = useState(false)

    return (
        <div>
            <Form.Group controlId="formYearSelect">
                <Form.Label>Select a Year</Form.Label>
                <Form.Switch
                    label="Select Year Range"
                    checked={isSwitchOn1}
                    onChange={() => setIsSwitchOn1(!isSwitchOn1)}></Form.Switch>
            </Form.Group>
            <RangeSlider
                value={sliderValue}
                onChange={(event) => setSliderValue(event.target.value)}
                min={Math.min(minYear)}
                max={Math.max(maxYear)}
                tooltip="on"
            />
            {isSwitchOn1 ? (
                <RangeSlider
                    value={sliderValue1}
                    onChange={(event) => setSliderValue1(event.target.value)}
                    min={Math.min(minYear)}
                    max={Math.max(maxYear)}
                    tooltip="on"
                />
            ) : null}
        </div>
    )
}

export default MainSearchYearSelection
