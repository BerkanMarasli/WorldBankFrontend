import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

function MainSearchCountrySelection(props) {
    const countryNames = props.data

    return (
        <div>
            <h2>Select a Country</h2>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {countryNames.map((country) => {
                    console.log(country)
                    return (
                        <Dropdown.Item>{`${country.countryname}`}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    )
}

// async function fetchData(setDisplayCountryNames) {
//     const response = await axios.get("http://localhost:8080/allData ")
//     const data = await response.data
//     setDisplayCountryNames(true)
//     console.log(data)
//     return data
// }

export default MainSearchCountrySelection
