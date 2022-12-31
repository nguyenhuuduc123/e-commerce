import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const SignUp = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <BreadCrumb title="SignUp" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          {" "}
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="phone number"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className=" d-flex justify-content-center gap-15 align-items-center">
                      <button className="button signup border-0">
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
