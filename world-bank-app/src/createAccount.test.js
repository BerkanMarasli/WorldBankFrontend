import { render, screen } from "@testing-library/react";
import CreateAccount from "./createAccount";

describe("createAccount form", () => {
  test("Component gets rendered", () => {
    render(<CreateAccount />);
  });
  test("Component contains a form", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("createAccountForm")).toBeInTheDocument();
  });
  test("Form has username field", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("createUsername")).toBeInTheDocument();
  });
  test("Form has password field", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("createPassword")).toBeInTheDocument();
  });
  test("Form has Confirm Password field", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
  });
  test("Form has submit button", () => {
    render(<CreateAccount />);
    expect(screen.getByTestId("submitButton")).toBeInTheDocument();
  });
});
