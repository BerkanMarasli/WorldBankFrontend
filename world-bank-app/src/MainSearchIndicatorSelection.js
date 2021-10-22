import Form from "react-bootstrap/Form"
import ToggleButton from "react-bootstrap/ToggleButton"

function MainSearchIndicatorSelection(props) {
    const indicatorNames = props.data
    const { setIndicatorSelection } = props.selections
    return (
        <Form.Group className="d-flex flex-column align-items-center w-100" controlId="formBasicSelect">
            <ToggleButton className="mb-4" id="search-selectIndicator" value={null}>
                Select an Indicator
            </ToggleButton>
            <Form.Control className="text-center" as="select" onChange={(e) => setIndicatorSelection(e.target.value)}>
                {indicatorNames.map((indicator) => {
                    return <option value={`${indicator.indicatorcode}`}>{`${indicator.indicatorname}`}</option>
                })}
            </Form.Control>
        </Form.Group>
    )
}

export default MainSearchIndicatorSelection
