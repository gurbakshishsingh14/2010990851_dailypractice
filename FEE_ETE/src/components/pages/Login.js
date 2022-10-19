import React from "react";

const Login = ({ toggler }) => {
  return (
    <div className="mt-3">
      <form>
        <div className="form-outline mb-3">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="Email Address"
          />
          {/* <label className="form-label" for="form2Example1">Email address</label> */}
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
          />
          {/* <label className="form-label" for="form2Example2">Password</label> */}
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
              />
              <label className="form-check-label" htmlFor="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-2">
          Sign in
        </button>
      </form>
      <div className="text-right">
        <p>
          Not a member?{" "}
          <a
            href="#register"
            className="link-primary"
            onClick={(e) => {
              e.preventDefault();
              toggler(false);
            }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
