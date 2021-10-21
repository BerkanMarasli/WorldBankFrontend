import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function CreateAccount() {
    const [serverResponseMessage, setServerResponseMessage] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            email: Yup.string()
                .max(35, "Cannot exceed 35 characters")
                .email("Invalid email address")
                .required("Required"),
        }),
        onSubmit: async (values) => {
            const result = await sendUserDetailsToServer(values)
            result === "Success"
                ? setServerResponseMessage("Success")
                : setServerResponseMessage("Failure")
            //Redirect to search page
        },
    })

    return (
        <div className="text-center">
            <Form
                data-testid="createAccountForm"
                className="w-50 p-3 offset-md-3"
                onSubmit={formik.handleSubmit}>
                <h3>Welcome to World Bank Database.</h3>
                <p>Please create an account below: </p>

                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            data-testid="createUsername"
                            placeholder="email"
                            className={validationCSS(
                                formik.touched.email,
                                formik.errors.email
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div
                                className="invalid-feedback"
                                data-testid="emailError">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                data-testid="createPassword"
                                placeholder="password"
                                class={validationCSS(
                                    formik.touched.password,
                                    formik.errors.password
                                )}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <div
                                    className="invalid-feedback"
                                    data-testid="requirePassword">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                data-testid="confirmPassword"
                                placeholder="confirm password"
                                class={validationCSS(
                                    formik.touched.confirmPassword,
                                    formik.errors.confirmPassword
                                )}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword ? (
                                <div
                                    className="invalid-feedback"
                                    data-testid="requireConfirmPassword">
                                    {formik.errors.confirmPassword}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    variant="primary"
                    type="submit"
                    data-testid="submitCreateAccount"
                    size="lg">
                    Create Account
                </Button>
            </Form>
            {serverResponseMessage === "Success" ? (
                <div data-testid="redirectMessage">
                    Success. Redirecting....
                </div>
            ) : serverResponseMessage === "Failure" ? (
                <div data-testid="redirectMessage">
                    <p>
                        Sorry, there may already be an account under that name.
                        Alternatively, we're having trouble accessing our server
                        at the moment.
                    </p>
                    <p>Please wait a few moments and try again.</p>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

function validationCSS(userHasVisited, errorStatus) {
    if (userHasVisited && !errorStatus) return "form-control is-valid"
    if (userHasVisited && errorStatus) return "form-control is-invalid"

    return "form-control"
}

async function sendUserDetailsToServer(values) {
    //Localhost may need to be updated when we start hosting the server
    let result = ""
    const submitToServer = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(async (response) => {
            result = await response.json()
            if (result.name === "error") result = "Error"
            else result = "Success"
        })
        .catch((error) => {
            console.log("Error:", error)
            result = "error"
        })

    return result
}

export default CreateAccount
