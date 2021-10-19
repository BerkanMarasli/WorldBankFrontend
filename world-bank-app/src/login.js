import { useFormik, F } from "formik"
import validationCSS from "./createAccount"
import "bootstrap/dist/css/bootstrap.min.css"
import * as Yup from "yup"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .max(20, "Must be 20 characters or less")
                .required("Required")
                .label("password"),
            email: Yup.string()
                .max(35, "Cannot exceed 35 characters")
                .email("Invalid email address")
                .required("Required")
                .label("email"),
        }),
        onSubmit: (values) => {
            //Endpoint fetching will be put here
            alert(
                "You have submitted the following values: " +
                    JSON.stringify(values)
            )
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
                            required
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
                        {formik.touched.password && formik.errors.password ? (
                            <div
                                className="invalid-feedback"
                                data-testid="requirePassword">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </Form.Group>
                </Row>
                <Button
                    variant="primary"
                    type="submit"
                    data-testid="submitLogin"
                    size="lg">
                    Create Account
                </Button>
            </Form>

            <div data-testid="createAccountForm">
                Don't have an account? Create an account here.
            </div>
        </div>
    )
}

export default Login
