import GraphOneCountry from "./GraphOneCountry"
import GraphTwoCountries from "./GraphTwoCountries"
import Button from "react-bootstrap/Button"

function Results(props) {
    const { country1Data, setCountry1Data, country2Data, setCountry2Data } = props.data
    const { setDisplayMainSearch } = props.display
    const numberOfDataPointsCountry1 = country1Data.length
    const numberOfDataPointsCountry2 = country2Data.length
    return (
        <div>
            {(numberOfDataPointsCountry1 > 1 && numberOfDataPointsCountry2) > 1 ? (
                <GraphTwoCountries data={{ country1Data: country1Data, country2Data: country2Data }}></GraphTwoCountries>
            ) : numberOfDataPointsCountry1 === 1 && numberOfDataPointsCountry2 === 1 ? (
                <p>
                    Only available: year={country1Data[0].year} : value1=
                    {country1Data[0].value} and value2={country2Data[0].value}
                </p>
            ) : (
                <p>No Information Available For Search</p>
            )}
            <Button variant="primary" type="submit" size="m" onClick={() => handleBackClick(setCountry1Data, setCountry2Data, setDisplayMainSearch)}>
                Back to Search
            </Button>
        </div>
    )
}

function handleBackClick(setCountry1Data, setCountry2Data, setDisplayMainSearch) {
    setCountry1Data(null)
    setCountry2Data(null)
    setDisplayMainSearch("block")
}

export default Results
