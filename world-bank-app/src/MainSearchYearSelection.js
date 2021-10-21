import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import RangeSlider from "react-bootstrap-range-slider" // yarn add react-bootstrap-range-slider
import { useState } from "react"

function MainSearchYearSelection(props) {
    const years = props.data.map((year) => year.year)
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)
    const [topSliderValue, setTopSliderValue] = useState((minYear + maxYear) / 2)
    const [bottomSliderValue, setBottomSliderValue] = useState(topSliderValue + 1)
    const { yearRangeSearch, setYearRangeSearch } = props.decisions
    const { setTopYearSelection, setBottomYearSelection } = props.selections
    setTopYearSelection(topSliderValue)
    setBottomYearSelection(bottomSliderValue)
    return (
        <div>
            <ToggleButtonGroup
                className="mt-4 mb-4"
                type="radio"
                name="options"
                defaultValue={yearRangeSearch}
                onChange={(e) => setYearRangeSearch(e)}>
                <ToggleButton id="search-oneYear" value={false}>
                    Single Year
                </ToggleButton>
                <ToggleButton id="search-rangeOfYears" value={true}>
                    Range of Years
                </ToggleButton>
            </ToggleButtonGroup>
            <RangeSlider
                className="mb-4"
                value={topSliderValue}
                onChange={(event) => setTopSliderValue(event.target.value)}
                min={minYear}
                max={maxYear}
                // tooltip="on"
            />
            {yearRangeSearch ? (
                <RangeSlider
                    className="mt-4 mb-4"
                    value={bottomSliderValue}
                    onChange={(event) => setBottomSliderValue(event.target.value)}
                    min={minYear}
                    max={maxYear}
                    // tooltip="on"
                />
            ) : null}
        </div>
    )
}

export default MainSearchYearSelection
