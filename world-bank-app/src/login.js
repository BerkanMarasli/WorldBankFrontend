import { useFormik } from "formik"
import * as Yup from "yup"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Login() {
    const [serverResponseMessage, setServerResponseMessage] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .max(20, "Must be 20 characters or less")
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
                data-testid="loginForm"
                className="w-50 p-3 offset-md-3"
                onSubmit={formik.handleSubmit}>
                <h3>Welcome to World Bank Database.</h3>
                <p>Please login to your account below: </p>

                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            data-testid="enterEmail"
                            placeholder="email"
                            className={validationCSS(
                                formik.touched.email,
                                formik.errors.email
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            //required
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
                                data-testid="enterPassword"
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
                </Row>
                <Button
                    variant="primary"
                    type="submit"
                    data-testid="submitLogin"
                    size="lg">
                    Login
                </Button>
            </Form>

            {serverResponseMessage === "Success" ? (
                <div data-testid="redirectMessage">
                    Success. Redirecting....
                </div>
            ) : serverResponseMessage === "Failure" ? (
                <div data-testid="redirectMessage">
                    <p data-testid="accountNotFound">
                        Sorry, we couldn't find an account with those login
                        details.
                    </p>
                    <p>Why not create a new account?</p>
                </div>
            ) : (
                <div data-testid="createAccountForm">
                    Don't have an account? Create an account here.
                </div> //Will add a link to the createAccount page here when router is complete
            )}
        </div>
    )
}

//NOTE: I know this function could just be imported from ""./createAccount", but for whatever reason
//the css breaks if you import this function instead of just copy + pasting it here. - Sean
function validationCSS(userHasVisited, errorStatus) {
    if (userHasVisited && !errorStatus) return "form-control is-valid"
    if (userHasVisited && errorStatus) return "form-control is-invalid"

    return "form-control"
}

async function sendUserDetailsToServer(values) {
    //Localhost may need to be updated when we start hosting the server
    console.log("submitting....")
    let result = ""

    console.log("You are sending...")
    console.log(JSON.stringify(values))
    const submitToServer = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(async (response) => {
            result = await response.json()
            console.log("response is....")
            console.log(result)
            if (result.error) result = "Error"
            else result = "Success"
        })
        .catch((error) => {
            console.log("Error:", error)
            result = "error"
        })
    console.log("result is...")
    console.log(result)
    return result
}

export default Login
