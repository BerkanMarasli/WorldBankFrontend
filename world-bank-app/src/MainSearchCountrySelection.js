import Form from "react-bootstrap/Form"
import { useState } from "react"

function MainSearchCountrySelection(props) {
    const countryNames = props.data
    const [isSwitchOn, setIsSwitchOn] = useState(false)

    return (
        <Form.Group controlId="formCountrySelect">
            <Form.Label>Select a Country</Form.Label>
            <Form.Switch
                label="Compare Two Countries"
                checked={isSwitchOn}
                onChange={() => setIsSwitchOn(!isSwitchOn)}></Form.Switch>
            <Form.Control as="select">
                {countryNames.map((country) => {
                    return (
                        <option
                            value={`${country.countryname}`}>{`${country.countryname}`}</option>
                    )
                })}
            </Form.Control>
            {isSwitchOn ? (
                <Form.Control as="select">
                    {countryNames.map((country) => {
                        return (
                            <option
                                value={`${country.countryname}`}>{`${country.countryname}`}</option>
                        )
                    })}
                </Form.Control>
            ) : null}
        </Form.Group>
    )
}

export default MainSearchCountrySelection
