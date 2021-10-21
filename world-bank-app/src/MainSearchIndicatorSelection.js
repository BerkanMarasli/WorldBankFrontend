import Form from "react-bootstrap/Form"

function MainSearchIndicatorSelection(props) {
    const indicatorNames = props.data
    const { setIndicatorSelection } = props.selections
    return (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select an Indicator</Form.Label>
            <Form.Control
                as="select"
                onChange={(e) => setIndicatorSelection(e.target.value)}>
                {indicatorNames.map((indicator) => {
                    return (
                        <option
                            value={`${indicator.indicatorcode}`}>{`${indicator.indicatorname}`}</option>
                    )
                })}
            </Form.Control>
        </Form.Group>
    )
}

export default MainSearchIndicatorSelection
