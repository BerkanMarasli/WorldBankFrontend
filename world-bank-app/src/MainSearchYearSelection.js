import Form from "react-bootstrap/Form"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import RangeSlider from "react-bootstrap-range-slider" // yarn add react-bootstrap-range-slider
import { useState } from "react"

function MainSearchYearSelection(props) {
    const years = props.data.map((year) => year.year)
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)
    const [topSliderValue, setTopSliderValue] = useState(
        (minYear + maxYear) / 2
    )
    const [bottomSliderValue, setBottomSliderValue] = useState(
        topSliderValue + 1
    )
    const { yearRangeSearch, setYearRangeSearch } = props.decisions
    const { setTopYearSelection, setBottomYearSelection } = props.selections
    setTopYearSelection(topSliderValue)
    setBottomYearSelection(bottomSliderValue)
    return (
        <div>
            <Form.Group controlId="formYearSelect">
                <Form.Label>Select a Year</Form.Label>
                <Form.Switch
                    label="Select Year Range"
                    checked={yearRangeSearch}
                    onChange={() =>
                        setYearRangeSearch(!yearRangeSearch)
                    }></Form.Switch>
            </Form.Group>
            <RangeSlider
                value={topSliderValue}
                onChange={(event) => setTopSliderValue(event.target.value)}
                min={Math.min(minYear)}
                max={Math.max(maxYear)}
                tooltip="on"
            />
            {yearRangeSearch ? (
                <RangeSlider
                    value={bottomSliderValue}
                    onChange={(event) =>
                        setBottomSliderValue(event.target.value)
                    }
                    min={Math.min(minYear)}
                    max={Math.max(maxYear)}
                    tooltip="on"
                />
            ) : null}
        </div>
    )
}

export default MainSearchYearSelection
