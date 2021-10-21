import GraphOnly from "./GraphOnly"

function Results(props) {
    const { countryOnlyData } = props.data
    console.log("results data:", countryOnlyData)
    const numberOfDataPoints = countryOnlyData.length
    return numberOfDataPoints > 1 ? (
        <GraphOnly data={countryOnlyData}></GraphOnly>
    ) : numberOfDataPoints === 1 ? (
        <p>
            Only available: year={countryOnlyData[0].year} : value={countryOnlyData[0].value}
        </p>
    ) : (
        <p>No Information Available For Search</p>
    )
}

export default Results
