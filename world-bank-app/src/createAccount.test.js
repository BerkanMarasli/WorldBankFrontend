import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import CreateAccount from "./createAccount"

describe("createAccount form", () => {
    test("Component gets rendered", () => {
        render(<CreateAccount />)
    })
    test("Component contains a form", () => {
        render(<CreateAccount />)
        expect(screen.getByTestId("createAccountForm")).toBeInTheDocument()
    })
    test("Form has username field", () => {
        render(<CreateAccount />)
        expect(screen.getByTestId("createUsername")).toBeInTheDocument()
    })
    test("Form has password field", () => {
        render(<CreateAccount />)
        expect(screen.getByTestId("createPassword")).toBeInTheDocument()
    })
    test("Form has Confirm Password field", () => {
        render(<CreateAccount />)
        expect(screen.getByTestId("confirmPassword")).toBeInTheDocument()
    })
    test("Form has submit button", () => {
        render(<CreateAccount />)
        expect(screen.getByTestId("submitCreateAccount")).toBeInTheDocument()
    })
    test("Submitting form with no password creates error message", async () => {
        await act(async () => {
            render(<CreateAccount />)
            await userEvent.click(screen.getByTestId("submitCreateAccount"))
        })
        expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    })
    test("The following is an invalid email address: 'bbb' ", async () => {
        await act(async () => {
            render(<CreateAccount />)
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
        })
        expect(screen.getByTestId("createUsername")).toHaveValue("bbb")
    })
    test("Emails cannot exceed 20 characters", async () => {
        await act(async () => {
            render(<CreateAccount />)
            //BEWARE - I have tried for loops, for each, and typing all the letters at once (i.e. "bbb..."). This seems to be the only way to test typing in formik.
            //TO DO: refactor this later (if time available)
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), "@")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.type(screen.getByTestId("createUsername"), ".")
            await userEvent.type(screen.getByTestId("createUsername"), "b")
            await userEvent.click(screen.getByTestId("submitCreateAccount"))
        })

        expect(screen.getByTestId("emailError")).toBeInTheDocument()
    })
    test("The user is reminded that his passwords must match", async () => {
        await act(async () => {
            render(<CreateAccount />)
            await userEvent.type(screen.getByTestId("createPassword"), "b")
            await userEvent.type(screen.getByTestId("confirmPassword"), "c")
            await userEvent.click(screen.getByTestId("submitCreateAccount"))
        })
        expect(screen.getByTestId("requireConfirmPassword")).toBeInTheDocument()
    })
    test("Passwords less than 8 characters are rejected", async () => {
        await act(async () => {
            render(<CreateAccount />)
            await userEvent.type(screen.getByTestId("createPassword"), "b")
            await userEvent.click(screen.getByTestId("submitCreateAccount"))
        })
        expect(screen.getByTestId("requirePassword")).toBeInTheDocument()
    })

    //Add tests for endpoint :)
})
