import "./Graph.css"
import { useState, useEffect } from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"
const axios = require("axios")

function Graph(props) {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const mainData = []
    if (data && data2) {
        console.log("data2", data2)
        data.forEach((dataPoint) => {
            console.log("dataPoint", dataPoint)
            const c2Obj = data2.find((c2) => {
                if (c2.year === dataPoint.year) return c2
            })
            console.log("c2Obj", c2Obj)
            console.log(c2Obj.value)
            mainData.push({
                year: dataPoint.year,
                value1: dataPoint.value,
                value2: c2Obj.value,
            })
        })
    }
    console.log(mainData)
    const [compareCountries, setCompareCountries] = useState(false)
    useEffect(() => {
        fetchDummyData(setData)
        fetchDummyData2(setData2, setCompareCountries)
    }, [])

    return (
        <div className="Graph-container d-flex align-items-center">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={300}
                    height={300}
                    data={mainData}
                    margin={{
                        top: 25,
                        right: 50,
                        left: 50,
                        bottom: 25,
                    }}>
                    {/* <CartesianGrid strokeDasharray="1 1" /> */}
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
                        dataKey="value1"
                        name={"INSERT INDICATOR NAME"}
                        stroke="#FF0000"
                        activeDot={{ r: 4 }}
                    />
                    {compareCountries ? (
                        <Line
                            type="monotone"
                            dataKey="value2"
                            name={"INSERT INDICATOR NAME"}
                            stroke="#0000FF"
                            activeDot={{ r: 4 }}
                        />
                    ) : null}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

async function fetchDummyData(setData) {
    const response = await axios.get(
        "http://localhost:8080/search/GBR/EN_ATM_CO2E_KT"
    )
    const data = await response.data
    setData(data)
}

async function fetchDummyData2(setData2, setCompareCountries) {
    const response = await axios.get(
        "http://localhost:8080/search/FRA/EN_ATM_CO2E_KT"
    )
    const data = await response.data
    console.log(data)
    setData2(data)
    setCompareCountries(true)
}

export default Graph
