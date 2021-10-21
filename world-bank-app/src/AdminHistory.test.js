import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import AdminHistory from "./AdminHistory"

describe("AdminHistory page", () => {
    test("Component gets rendered", () => {
        render(<AdminHistory />)
    })
    test("Component has user search item", async () => {
        await act(async () => {
            render(<AdminHistory />)
            render(<AdminHistory />) //How to test when relying on useEffect?
            //Will need to set searches length as longer than 1
        })

        expect(screen.getByTestId("userSearchItems")).toBeInTheDocument()
    })
})
