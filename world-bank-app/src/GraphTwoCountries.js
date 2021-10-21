import "./Graph.css"
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from "recharts"

function GraphTwoCountries(props) {
    const country1Data = props.data.country1Data
    const country2Data = props.data.country2Data
    const combinedData = combineCountryData(country1Data, country2Data)
    const country1Name = country1Data[0].countryname
    const country2Name = country2Data[0].countryname
    const indicator1Name = country1Data[0].indicatorname
    const indicator2Name = country2Data[0].indicatorname

    return (
        <div className="Graph-container d-flex align-items-center">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={300}
                    height={300}
                    data={combinedData}
                    margin={{
                        top: 25,
                        right: 50,
                        left: 50,
                        bottom: 25,
                    }}>
                    <XAxis dataKey="year">
                        <Label value="Year" position="bottom" />
                    </XAxis>
                    {/* <YAxis type="number" domain={["dataMin", "dataMax"]} width={80} /> */}
                    <Tooltip />
                    <Legend wrapperStyle={{ top: 0, left: 25, marginTop: "20px" }} layout="horizontal" align="center" verticalAlign="top" />
                    <Line
                        type="monotone"
                        dataKey="country1Value"
                        name={`${country1Name} - ${indicator1Name}`}
                        stroke="#FF0000"
                        activeDot={{ r: 4 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="country2Value"
                        name={`${country2Name} - ${indicator2Name}`}
                        stroke="#0000FF"
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

function combineCountryData(country1Data, country2Data) {
    const combinedData = []
    country1Data.forEach((country1DataPoint) => {
        const country2Obj = country2Data.find((country2DataPoint) => {
            if (country2DataPoint.year === country1DataPoint.year) {
                return country2DataPoint
            }
        })
        combinedData.push({
            year: country1DataPoint.year,
            country1Value: country1DataPoint.value,
            country2Value: country2Obj.value,
        })
    })
    return combinedData
}

export default GraphTwoCountries
