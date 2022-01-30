import React from 'react';
import "../Mobile.css";
import "../App.css";

export default function Login() {
  return <div className='login-container'>
      <div className='login'>
          <h1>Login</h1>
          <div className='login-grid' >
          <input type={"email"} placeholder='Email'/>
          <input type={"password"} placeholder='Password'/>
          <input className='input-button' type={"submit"} value={"Login"}/>
          </div>
      </div>
  </div>;
}
