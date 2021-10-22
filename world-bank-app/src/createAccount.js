import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"

import { Button, Form, Row, Col, Alert } from "react-bootstrap"

function CreateAccount(props) {
    const { handleModalClose } = props
    const [serverResponseMessage, setServerResponseMessage] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string().min(8, "Must be at least 8 characters").max(20, "Must be 20 characters or less").required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            email: Yup.string().max(35, "Cannot exceed 35 characters").email("Invalid email address").required("Required"),
        }),
        onSubmit: async (values) => {
            const result = await sendUserDetailsToServer(values)
            if (result === "Success") {
                setServerResponseMessage("Success")
                handleModalClose()
            } else {
                setServerResponseMessage("Failure")
            }
        },
    })

    return (
        <div className="d-flex justify-content-center">
            <Form data-testid="createAccountForm" onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            data-testid="createUsername"
                            placeholder="Email"
                            className={validationCSS(formik.touched.email, formik.errors.email)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback" data-testid="emailError">
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
                                placeholder="Password"
                                class={validationCSS(formik.touched.password, formik.errors.password)}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="invalid-feedback" data-testid="requirePassword">
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
                                placeholder="Confirm Password"
                                class={validationCSS(formik.touched.confirmPassword, formik.errors.confirmPassword)}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="invalid-feedback" data-testid="requireConfirmPassword">
                                    {formik.errors.confirmPassword}
                                </div>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
                <div className="d-grid">
                    <Button className="mb-3" variant="primary" type="submit" data-testid="submitCreateAccount" size="lg">
                        Create Account
                    </Button>
                    {serverResponseMessage === "Success" ? (
                        <Alert variant="success" data-testid="redirectMessage">
                            Success. Redirecting....
                        </Alert>
                    ) : serverResponseMessage === "Failure" ? (
                        <Alert variant="danger" data-testid="redirectMessage">
                            <p>
                                Sorry, there may already be an account under that name. Alternatively, we're having trouble accessing our server at
                                the moment.
                            </p>
                            <hr />
                            <p>Please wait a few moments and try again.</p>
                        </Alert>
                    ) : null}
                </div>
            </Form>
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
    const submitToServer = await fetch(process.env.REACT_APP_API_URL + "/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(async (response) => {
            result = await response.text()
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
