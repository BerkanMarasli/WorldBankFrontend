import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import Login from "./login"

describe("createAccount form", () => {
    test("Component gets rendered", () => {
        render(<Login />)
    })
    test("Component contains a form", () => {
        render(<Login />)
        expect(screen.getByTestId("loginForm")).toBeInTheDocument()
    })
    test("Form has email field", () => {
        render(<Login />)
        expect(screen.getByTestId("enterEmail")).toBeInTheDocument()
    })
    test("Form has password field", () => {
        render(<Login />)
        expect(screen.getByTestId("enterPassword")).toBeInTheDocument()
    })
    test("Form has submit button", () => {
        render(<Login />)
        expect(screen.getByTestId("submitLogin")).toBeInTheDocument()
    })
    // test("Form has option to switch to createAccount form", () => {
    //     render(<Login />)
    //     expect(screen.getByTestId("createAccountForm")).toBeInTheDocument()
    // })
    // test("Submitting form with no password creates error message", async () => {
    //     await act(async () => {
    //         render(<CreateAccount />)
    //         await userEvent.click(screen.getByTestId("submitCreateAccount"))
    //     })
    //     expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    // })
    // test("The following is an invalid email address: 'bbb' ", async () => {
    //     await act(async () => {
    //         render(<CreateAccount />)
    //         await userEvent.type(screen.getByTestId("createUsername"), "b")
    //         await userEvent.type(screen.getByTestId("createUsername"), "b")
    //         await userEvent.type(screen.getByTestId("createUsername"), "b")
    //     })
    //     expect(screen.getByTestId("createUsername")).toHaveValue("bbb")
    // })

    // test("Passwords less than 8 characters are rejected", async () => {
    //     await act(async () => {
    //         render(<CreateAccount />)
    //         await userEvent.type(screen.getByTestId("createPassword"), "b")
    //         await userEvent.click(screen.getByTestId("submitCreateAccount"))
    //     })
    //     expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    // })

    //Add tests for endpoint :)
})
