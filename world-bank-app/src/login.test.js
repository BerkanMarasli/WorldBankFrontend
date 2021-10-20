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
    test("Submitting form with no password creates error message", async () => {
        await act(async () => {
            render(<Login />)
            await userEvent.click(screen.getByTestId("submitLogin"))
        })
        expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    })
    test("The following is an invalid email address: 'bbb' ", async () => {
        await act(async () => {
            render(<Login />)
            await userEvent.type(screen.getByTestId("enterEmail"), "b")
            await userEvent.type(screen.getByTestId("enterEmail"), "b")
            await userEvent.type(screen.getByTestId("enterEmail"), "b")
            await userEvent.click(screen.getByTestId("submitLogin"))
        })
        expect(screen.getByTestId("emailError")).toBeInTheDocument()
    })

    test("Passwords less than 8 characters are rejected", async () => {
        await act(async () => {
            render(<Login />)
            await userEvent.type(screen.getByTestId("enterPassword"), "b")
            await userEvent.click(screen.getByTestId("submitLogin"))
        })
        expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    })

    //Add tests for endpoint :) and for switching to createAccount form :)
})
