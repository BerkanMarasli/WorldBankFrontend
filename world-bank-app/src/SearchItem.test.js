import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import SearchItem from "./SearchItem"

describe("SearchItem component", () => {
    test("Search item includes username", () => {
        render(<SearchItem />)
        expect(screen.getByTestId("username")).toBeInTheDocument()
    })
    test("Search item includes search title", () => {
        render(<SearchItem />)
        expect(screen.getByTestId("searchTitle")).toBeInTheDocument()
    })
    test("SearchItem includes country", () => {
        render(<SearchItem />)
        expect(screen.getByTestId("country")).toBeInTheDocument()
    })
    test("SearchItem includes time of search", () => {
        render(<SearchItem />)
        expect(screen.getByTestId("time")).toBeInTheDocument()
    })
    test("SearchItem includes option to view the search", () => {
        render(<SearchItem />)
        expect(screen.getByTestId("viewSearch")).toBeInTheDocument()
    })
})
//Note: these tests are actually going to the server. Can we stop that?
