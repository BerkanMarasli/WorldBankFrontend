import Form from "react-bootstrap/Form"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"

function MainSearchCountrySelection(props) {
    const countryNames = props.data
    const { oneCountrySearch, setOneCountrySearch } = props.decisions
    const { setTopCountrySelection, setBottomCountrySelection } = props.selections

    return (
        <Form.Group className="d-flex flex-column align-items-center w-100" controlId="formCountrySelect">
            <ToggleButtonGroup
                className="mt-4 mb-4"
                type="radio"
                name="options"
                defaultValue={oneCountrySearch}
                onChange={(e) => setOneCountrySearch(e)}>
                <ToggleButton id="search-oneCountry" value={true}>
                    Single Country
                </ToggleButton>
                <ToggleButton id="search-twoCountries" value={false}>
                    Two Countries
                </ToggleButton>
            </ToggleButtonGroup>
            <div className="d-flex justify-content-between">
                <Form.Control className="mb-4 text-center" as="select" onChange={(e) => setTopCountrySelection(e.target.value)}>
                    {countryNames.map((country) => {
                        return <option value={`${country.countryname}`}>{`${country.countryname}`}</option>
                    })}
                </Form.Control>
                {!oneCountrySearch ? (
                    <Form.Control className="mb-4 text-center" as="select" onChange={(e) => setBottomCountrySelection(e.target.value)}>
                        {countryNames.map((country) => {
                            return <option value={`${country.countryname}`}>{`${country.countryname}`}</option>
                        })}
                    </Form.Control>
                ) : null}
            </div>
        </Form.Group>
    )
}

export default MainSearchCountrySelection
