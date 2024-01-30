import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import log from "../assets/log.jpeg"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation =useNavigate()

  function handleLogin(e) {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Basic password validation (minimum length)
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Clear previous errors
    setError("");

    const body = {
      email,
      password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Login failed with status ${response.status}`);
        }
      })
      .then(res => {
        localStorage.setItem("userToken", res.token);
        console.log(res);
        alert("Login success");
       navigation("/dashboard")
        // Use your navigation method here to redirect to the dashboard
        // For example, if you are using react-router, you might do:
        // history.push("/dashboard");
      })
      .catch(error => {
        console.error(error);
        alert(`Login failed.\nError: ${error.message}`);
      });
      
     
  }

  return (
    <>
     
      <div >
      <img src={log} alt='' className=' backdrop-blur-lg  bg-cover' />
        <div>
       
          <div className=" border-style:solid bg-slate-950 border border-slate-950 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative  "  >
            <h1 className=" text-4xl  text-white font-bold text-center mb-4">Login</h1>
            <form onSubmit={handleLogin} action="">
              <div className=" relative my-4">
                <label htmlFor="email" className="absolute text-sm text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6"> Email</label>
                <input
                  type="email"
                  id="email"
                  className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus: border-blue-500 focus:outline-none  focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div><br></br>
              <div className=" relative my-4">
                <label htmlFor="password" className="absolute text-sm text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6"> Password</label>
                <input
                  type="password"
                  id="password"
                  className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus: border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
              </div><br></br>
              {error && <div className="text-red-500">{error}</div>}
              <div className="flex justify-between items-center">
                <div className=" flex gap-3 items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Remember Me"> &nbsp;&nbsp;Remember Me</label>
                </div><br></br><div>
                  <Link to='' className=" text-blue-500 flex-row">Forgot Password?</Link>
                </div>

              </div><br></br>
              <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
              <div><br></br>
                <span className="m-4">New Here? <Link className="text-blue-500" to='/Register'>Create an Account</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
</>
)
  }

    
