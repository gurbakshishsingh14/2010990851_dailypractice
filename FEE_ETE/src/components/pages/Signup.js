import React from "react";

const SignUp = ({ toggler }) => {
  return (
    <div className="mt-3">
      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example1"
                className="form-control"
                placeholder="First Name"
              />
              {/* <label className="form-label" for="form3Example1">First name</label> */}
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example2"
                className="form-control"
                placeholder="Last Name"
              />
              {/* <label className="form-label" for="form3Example2">Last name</label> */}
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            className="form-control"
            placeholder="Email Address"
          />
          {/* <label className="form-label" for="form3Example3">Email address</label> */}
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form3Example4"
            className="form-control"
            placeholder="Password"
          />
          {/* <label className="form-label" for="form3Example4">Password</label> */}
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          href="/"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
