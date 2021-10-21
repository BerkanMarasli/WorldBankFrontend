import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import AdminHistory from "./AdminHistory"

describe("AdminHistory page", () => {
    test("Component gets rendered", () => {
        render(<AdminHistory />)
    })
    test("Component has user search item", () => {
        render(<AdminHistory />)
        expect(screen.getByTestId("userSearchItem")).toBeInTheDocument()
    })
    test("user Search item includes username", () => {
        render(<AdminHistory />)
        expect(screen.getByTestId("username")).toBeInTheDocument()
    })
    test("user Search item includes search title", () => {
        render(<AdminHistory />)
        expect(screen.getByTestId("searchTitle")).toBeInTheDocument()
    })
})
