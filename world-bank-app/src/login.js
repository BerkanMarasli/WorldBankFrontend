import { useFormik } from "formik"
import validationCSS from "./createAccount"
import * as Yup from "yup"

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
                .required("Required"),
            email: Yup.string()
                .max(35, "Cannot exceed 35 characters")
                .email("Invalid email address")
                .required("Required"),
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
            <form
                data-testid="loginForm"
                className="was-validated"
                //w-50 p-3 offset-md-3
                //novalidate
                onSubmit={formik.handleSubmit}>
                <h3>Welcome to World Bank Database.</h3>
                <p>Please login to your account below: </p>
                <div class="form-group">
                    <label htmlFor="email" for="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        data-testid="enterEmail"
                        placeholder="email"
                        class={validationCSS(
                            formik.touched.email,
                            formik.errors.email
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        required
                    />
                    <div className="invalid-feedback">That's not right.</div>
                    {formik.touched.email && formik.errors.email ? (
                        <div data-testid="emailError">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </div>
                <div className="form-group">
                    <input
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
                        <div data-testid="requirePassword">
                            {formik.errors.password}
                        </div>
                    ) : null}
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        class="btn btn-primary"
                        data-testid="submitLogin">
                        Login
                    </button>
                </div>
            </form>
            <div data-testid="createAccountForm">
                Don't have an account? Create an account here.
            </div>
        </div>
    )
}

export default Login
