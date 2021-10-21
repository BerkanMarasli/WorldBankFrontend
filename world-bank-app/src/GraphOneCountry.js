import "./Graph.css"
import { useState, useEffect } from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

function GraphOneCountry(props) {
    const [data, setData] = useState(props.data)
    const indicatorName = data[0].indicatorname
    const countryName = data[0].countryname

    return (
        <div className="Graph-container d-flex align-items-center">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 25,
                        right: 50,
                        left: 50,
                        bottom: 25,
                    }}>
                    <XAxis dataKey="year">
                        <Label value="Year" position="bottom" />
                    </XAxis>
                    <YAxis
                        type="number"
                        domain={["dataMin", "dataMax"]}
                        width={80}
                    />
                    <Tooltip />
                    <Legend
                        layout="horizontal"
                        align="right"
                        verticalAlign="top"
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        name={`${countryName} - ${indicatorName}`}
                        stroke="#FF0000"
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphOneCountry
