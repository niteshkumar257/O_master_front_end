import React, { useEffect, useState } from "react";
import Image from "../assets/share.svg";
import Logo from "../assets/logo.svg";
import GoogleSvg from "../assets/icons8-dice-48.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import { API_URL } from "../api";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate();
  const token = localStorage.getItem("token");
  
  useEffect(()=>{
    if(token){
      navigate('/home');
    }

  },[])

  const Register = () => {
    if (!email) {
    }
    if (!password) {
    }
    if (!name) {
    }
    
    setIsLoading(true);
    axios.post(`${API_URL}/user/register`,{
      name,email,password
    })
    .then((res)=>{
      setIsLoading(false);
    
      const {token}=res.data;
      localStorage.setItem('token',token);
      navigate('/home');

    }).catch((err)=>{
      
      if(err.response.status)
        {
          if(err.response.status===400)
            {
              toast.error('User alredy exit', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }else
            {
              toast.error('Something went wrong please try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
        }
      setIsLoading(false);
    })

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
              <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
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
                <button type="button" onClick={Register}>{isLoading ? "Loading .." : "Register"}</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
