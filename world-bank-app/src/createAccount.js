import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }
  return errors;
};

function CreateAccount() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      //put salt hasher here
      alert(
        "You have submitted the following values: " + JSON.stringify(values)
      );
    },
  });

  return (
    <div>
      <form
        data-testid="createAccountForm"
        class="w-50 p-3 offset-md-3"
        onSubmit={formik.handleSubmit}
      >
        <h3>Welcome to World Bank Database.</h3>
        <p>Please create an account below: </p>
        <div class="form-group">
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            data-testid="createUsername"
            placeholder="email"
            class="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <div class="invalid-feedback"> Invalid username. </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="username"
                data-testid="createPassword"
                placeholder="password"
                class="form-control"
              />
              {formik.errors.password ? (
                <div data-test-id="requirePassword">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div class="col">
              <div class="form-group">
                <input
                  type="text"
                  name="username"
                  data-testid="confirmPassword"
                  placeholder="confirm password"
                  class="form-control is-valid"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <button type="submit" data-testid="submitButton">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
