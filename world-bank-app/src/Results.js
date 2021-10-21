import GraphOneCountry from "./GraphOneCountry"
import { useState } from "react"

function Results(props) {
    const [graphData, setGraphData] = useState(props.data.graphData)
    const numberOfDataPoints = graphData.length
    return numberOfDataPoints > 1 ? (
        <GraphOneCountry data={graphData}></GraphOneCountry>
    ) : numberOfDataPoints === 1 ? (
        <p>
            Only available: year={graphData[0].year} : value=
            {graphData[0].value}
        </p>
    ) : (
        <p>No Information Available For Search</p>
    )
}

export default Results
