import Form from "react-bootstrap/Form"

function MainSearchCountrySelection(props) {
    const countryNames = props.data
    const {
        countryOnlySearch,
        setCountryOnlySearch,
        twoCountrySearch,
        setTwoCountrySearch,
    } = props.decisions
    const { setTopCountrySelection, setBottomCountrySelection } =
        props.selections

    return (
        <Form.Group controlId="formCountrySelect">
            <Form.Label>Select a Country</Form.Label>
            <Form.Switch
                label="Search One Country"
                checked={countryOnlySearch}
                onChange={() =>
                    setCountryOnlySearch(!countryOnlySearch)
                }></Form.Switch>
            {!countryOnlySearch ? (
                <Form.Switch
                    label="Compare Two Countries"
                    checked={twoCountrySearch}
                    onChange={() =>
                        setTwoCountrySearch(!twoCountrySearch)
                    }></Form.Switch>
            ) : null}
            <Form.Control
                as="select"
                onChange={(e) => setTopCountrySelection(e.target.value)}>
                {countryNames.map((country) => {
                    return (
                        <option
                            value={`${country.countryname}`}>{`${country.countryname}`}</option>
                    )
                })}
            </Form.Control>
            {twoCountrySearch && !countryOnlySearch ? (
                <Form.Control
                    as="select"
                    onChange={(e) => setBottomCountrySelection(e.target.value)}>
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
