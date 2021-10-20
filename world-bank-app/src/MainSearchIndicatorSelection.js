import Form from "react-bootstrap/Form"

function MainSearchIndicatorSelection(props) {
    const indicatorNames = props.data

    return (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select an Indicator</Form.Label>
            <Form.Control as="select">
                {indicatorNames.map((indicator) => {
                    return (
                        <option
                            value={`${indicator.indicatorname}`}>{`${indicator.indicatorname}`}</option>
                    )
                })}
            </Form.Control>
        </Form.Group>
    )
}

export default MainSearchIndicatorSelection
