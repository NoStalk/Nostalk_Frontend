import React, { useRef } from "react";
import "../App.css";
import { useEffect } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaLock,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Password from "antd/lib/input/Password";
import { userData } from "../features/userDataSlice";

const Login = () => {
  const { logIn } = useAuth();
  const userData = useAuth();

  const navigate = useNavigate();
  const location: any = useLocation();
  const from: string = location.state?.from?.pathname || "/";

  const emailLoginField = useRef<HTMLInputElement>(null);
  const passwordLoginField = useRef<HTMLInputElement>(null);
  const emailSignUpField = useRef<HTMLInputElement>(null);
  const firstNameSignUpField = useRef<HTMLInputElement>(null);
  const lastNameSignUpField = useRef<HTMLInputElement>(null);
  const passwordSignUpField = useRef<HTMLInputElement>(null);
  const confirmPasswordSignUpField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.withCredentials = true;
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    if (sign_up_btn && sign_in_btn) {
      sign_up_btn.addEventListener("click", () => {
        if (container !== null) container.classList.add("sign-up-mode");
      });
      sign_in_btn.addEventListener("click", () => {
        if (container !== null) container.classList.remove("sign-up-mode");
      });

      return () => {
        sign_up_btn.removeEventListener("click", () => {
          if (container !== null) container.classList.add("sign-up-mode");
        });
        sign_in_btn.removeEventListener("click", () => {
          if (container !== null) container.classList.remove("sign-up-mode");
        });
      };
    }
  }, []);

  /**
   * @param email
   * @param password
   * Utility function that logs in user with provided email and password
   * Does not check if email and password are valid!
   */
  const loginWithCredentials = async (email: string, password: string) => {
    try {
      const userDataResponse = await axios.post<userData>(
        process.env.REACT_APP_BACKEND_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      navigate(from, { replace: true });
      logIn(userDataResponse.data);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      const loginError = document.querySelector<HTMLElement>(".loginError");
      if (loginError)
        loginError.style.display="block";
    }
  };

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /**
     * We check before posting if all the parameters are present
     * Then we post to url/login with email and passwword in it's body
     * Then if no error we finally store the recieved userData
     */
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.error(
        new Error("REACT_APP_BACKEND_URL enviroment variable not set")
      );
      return;
    }
    if (!emailLoginField.current) {
      console.error(new Error("E-mail field refernce null"));
      return;
    }

    if (!passwordLoginField.current) {
      console.error(new Error("Password field refernce null"));
      return;
    }
    if (userData.isLoggedIn) {
      console.error(new Error("User already logged in?"));
      return;
    }
    loginWithCredentials(
      emailLoginField.current.value,
      passwordLoginField.current.value
    );
  }

  function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Sign up triggered");

    if (!process.env.REACT_APP_BACKEND_URL) {
      console.error(
        new Error("REACT_APP_BACKEND_URL enviroment variable not set")
      );
      return;
    }
    if (!emailSignUpField.current) {
      console.error(new Error("E-mail field reference null"));
      return;
    }
    if (!firstNameSignUpField.current) {
      console.error(new Error("First name field reference null"));
      return;
    }
    if (!lastNameSignUpField.current) {
      console.error(new Error("Last name field reference null"));
      return;
    }
    if (!passwordSignUpField.current) {
      console.error(new Error("Password field reference null"));
      return;
    }
    if (!confirmPasswordSignUpField.current) {
      console.error(new Error("Password field reference null"));
      return;
    }

    if (
      passwordSignUpField.current.value !==
      confirmPasswordSignUpField.current.value
    ) {
      //TODO show visual feedback
      const passwordDiv = document.querySelector<HTMLElement>(
        ".confirmPasswordError"
      );
      if (passwordDiv) {
        passwordDiv.style.display = "block";
      }
      console.error(new Error("Passwords do not match"));
      return;
    }

    try {
      axios.post(process.env.REACT_APP_BACKEND_URL + "/register", {
        email: emailSignUpField.current.value,
        firstName: firstNameSignUpField.current.value,
        lastName: lastNameSignUpField.current.value,
        password: passwordSignUpField.current.value,
      });

      loginWithCredentials(
        emailSignUpField.current.value,
        passwordSignUpField.current.value
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <span className="loginError" style={{ color: "red", display: "none" }}>
              Invalid Email or Password!
            </span>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input type="email" placeholder="E-mail" ref={emailLoginField} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>
              <input
                type="password"
                placeholder="Password"
                ref={passwordLoginField}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </form>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div>
              <p
                className="confirmPasswordError"
                style={{ color: "red", display: "none" }}
              >
                The passwords do no match
              </p>
              <span
                className="passwordError"
                style={{ color: "red", display: "none" }}
              >
                Password should be atleast 8 characters long and have an
                UpperCase character, a LowerCase character, a digit and a
                special character!
              </span>
              <span
                className="emailError"
                style={{ color: "red", display: "none" }}
              >
                Email is not valid
              </span>
            </div>
            <div className="input-field">
              <i className="fas fa-user">
                <FaEnvelope style={{ color: "#121212" }} />
              </i>
              <input
                type="email"
                placeholder="E-mail"
                ref={emailSignUpField}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input
                type="text"
                placeholder="First Name"
                ref={firstNameSignUpField}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input
                type="text"
                placeholder="Last Name"
                ref={lastNameSignUpField}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>
              <input
                type="password"
                placeholder="Password"
                ref={passwordSignUpField}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>

              <input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordSignUpField}
                required
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="./login.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img
            src="./signup.svg"
            className="image"
            alt=""
            style={{ height: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
