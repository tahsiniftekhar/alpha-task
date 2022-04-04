import axios from "axios";
import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import phone from "../../image/banner.png";
import googl from "../../image/google.png";
import logo from "../../image/logo.png";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
  };

  handleLogin = (user) => {
    axios
      .post("http://localhost:5000/api/users/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.setState({
            loggedIn: true,
          });
        }
        console.log(this.state)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.handleLogin(this.state);
  };

  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <h1>Welcome {this.state.email}!</h1>
        ) : (
          <>
            <div className="login">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="login-2"
              >
                <div>
                  <img
                    style={{
                      height: "85%",
                      position: "relative",
                      left: "50%",
                      top: "10%",
                    }}
                    src={phone}
                    alt=""
                  />
                </div>
                <div className="formShape">
                  <div
                    className="marginal"
                    style={{ height: "75%", width: "80%" }}
                  >
                    <img src={logo} alt="" />
                    <h2
                      style={{
                        marginBottom: "10%",
                        fontSize: "30px",
                        fontWeight: "400",
                        fontStyle: "normal",
                        lineHeight: "42px",
                        color: "#473558",
                      }}
                    >
                      Explore new courses... Hurry up!!
                    </h2>
                    <div style={{ position: "relative" }}>
                      <form onSubmit={this.handleFormSubmit}>
                        <div style={{ position: "relative" }}>
                          <input
                            style={{}}
                            className="inputField"
                            placeholder="Email Address"
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                          />{" "}
                          <br />
                          <input
                            placeholder="Password"
                            className="inputField"
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />
                          <br />
                          <a
                            href="/someWhere"
                            className="forgotPass"
                            style={{
                              position: "absolute",
                              bottom: "0",
                              right: "8%",
                              textDecoration: "none",
                            }}
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <div>
                          <button
                            style={{ marginTop: "5%", width: "380px" }}
                            type="submit"
                            className="buttonSubmit"
                          >
                            LOG IN
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div
                            style={{
                              width: "38%",
                              height: "0px",
                              border: "1px solid #666666",
                              display: "inline-block",
                            }}
                            className="w-2/6 h-0.5 bg-gray-600"
                          ></div>
                          <h6
                            style={{
                              display: "inline-block",
                              marginLeft: "2%",
                              marginRight: "2%",
                              fontSize: "17px",
                              color: "#333333",
                              fontWeight: "700",
                            }}
                          >
                            or
                          </h6>
                          <div
                            style={{
                              width: "38%",
                              height: "0px",
                              border: "1px solid #666666",
                              display: "inline-block",
                            }}
                            className="w-2/6 h-0.5 bg-gray-600"
                          ></div>
                        </div>
                      </form>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={() => console.log("kliik")}
                          style={{
                            marginRight: "5%",
                            borderRadius: "45%",
                            backgroundColor: "transparent",
                            border: "0 solid transparent",
                          }}
                        >
                          <FaFacebook
                            style={{
                              width: "55px",
                              height: "55px",
                              color: "#3B5998",
                            }}
                          ></FaFacebook>
                        </button>
                        <button
                          style={{
                            borderRadius: "45%",
                            backgroundColor: "transparent",
                            MarginLeft: "5%",
                            border: "0 solid transparent",
                          }}
                        >
                          <img src={googl} alt="ugiu" />
                        </button>
                      </div>
                      <h5 className="signup">
                        Don't have an account?
                        <a
                          className=""
                          style={{
                            textDecoration: "none",
                            fontWeight: "600",
                            color: "#04acec",
                          }}
                          href="#signup"
                        >
                          {" "}
                          Sign Up
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Login;
