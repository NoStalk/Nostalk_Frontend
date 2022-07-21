import React, { useRef } from "react";
import "../App.css";
import { useEffect } from "react";
import axios from 'axios'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
        })
        sign_in_btn.removeEventListener("click", () => {
          if (container !== null) container.classList.remove("sign-up-mode");
        })

      }

    }
  }, [])

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /**
     * We check before posting if all the parameters are present
     * Then we post to url/login with email and passwword in it's body
     * Then if no error we finally store the recieved userData
     */
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.error(new Error('REACT_APP_BACKEND_URL enviroment variable not set'))
      return;
    }
    if (!emailLoginField.current) {
      console.error(new Error('E-mail field refernce null'))
      return;
    }

    if (!passwordLoginField.current) {
      console.error(new Error('Password field refernce null'));
      return;
    }
    if (userData.isLoggedIn) {
      console.error(new Error('User already logged in?'));
      return;
    }

    try {

      const userDataResponse = await axios.post<userData>(process.env.REACT_APP_BACKEND_URL + '/login', {
        email: emailLoginField.current.value,
        password: passwordLoginField.current.value
      },
        {
          withCredentials: true,
        }
      )
      navigate(from, { replace: true });
      logIn(userDataResponse.data)
      navigate(from, { replace: true });
    }
    catch (error) {
      console.error(error)
    }
  }

  function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!process.env.REACT_APP_BACKEND_URL) {
      console.error(new Error('REACT_APP_BACKEND_URL enviroment variable not set'))
      return;
    }
    if (!emailSignUpField.current) {
      console.error(new Error('E-mail field refernce null'))
      return;
    }
    if (!firstNameSignUpField.current) {
      console.error(new Error('First name field refernce null'))
      return;
    }
    if (!lastNameSignUpField.current) {
      console.error(new Error('Last name field refernce null'))
      return;
    }
    if (!passwordSignUpField.current) {
      console.error(new Error('Password field refernce null'));
      return;
    }
    if (!confirmPasswordSignUpField.current) {
      console.error(new Error('Password field refernce null'));
      return;
    }

    if (passwordSignUpField.current.value !== confirmPasswordSignUpField.current.value) {
      //TODO show visual feedback

      console.error(new Error('Passwords do not match'));
    }

    axios.post(process.env.REACT_APP_BACKEND_URL + '/register', {
      email: emailSignUpField.current.value,
      firstName: firstNameSignUpField.current.value,
      lastName: lastNameSignUpField.current.value,
      password: passwordSignUpField.current.value
    })
    console.log('User registered')

  }






  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
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
              <input type="password" placeholder="Password" ref={passwordLoginField} />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </form>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaEnvelope style={{ color: "#121212" }} />
              </i>
              <input type="email" placeholder="E-mail" ref={emailSignUpField} required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input type="text" placeholder="First Name" ref={firstNameSignUpField} required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input type="text" placeholder="Last Name" ref={lastNameSignUpField} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>
              <input type="password" placeholder="Password" ref={passwordSignUpField} required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>

              <input type="password" placeholder="Confirm Password" ref={confirmPasswordSignUpField} required />
              <p>Hello</p>


            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
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
