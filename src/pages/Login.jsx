import React ,{useEffect, useState} from 'react';
import Image from "../assets/share.svg";
import Logo from "../assets/logo.svg";
import GoogleSvg from "../assets/icons8-dice-48.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { API_URL } from "../api";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Login.css";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
 const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState("");
  const [isError,setIsError]=useState(false);
  const [errorMessage,setErrorMessage]=useState("");
  const token = localStorage.getItem("token");


  useEffect(()=>{
    if(token)
      {
        navigate('/home')
      }

  },[])

  const Login = async() => {
    if (!email || !password) {
      setErrorMessage("Email and Password are required");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const res = await axios.post(`${API_URL}/user/login`, { email, password });
      setIsLoading(false);
      localStorage.setItem('token', res.data.token); 
      toast.success('Login Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate('/home');
      
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsError(true);
      

      if (err.response) {
        // Server responded with a status other than 2xx
        if (err.response.status === 401) {
          setErrorMessage("Invalid email or password");
          toast.error('Invalid email or password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        } else {
          toast.error('Authentication failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setErrorMessage("Authentication failed. Please try again later.");
        }
      } else if (err.request) {
        toast.error('server error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        // Request was made but no response received
        setErrorMessage("No response from server. Please check your internet connection.");
      } else {
        // Something else happened while setting up the request
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
    
  };

  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" style={{ image: "10vh", width: "30vh" }} />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                {/* <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div> */}
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={Login}>{
                   isLoading ? "loading ...":"Log In"
                }
                </button>
              </div>
            </form>
            {
              errorMessage && <p style={{color:"red"}}>{errorMessage}</p>
            }
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
