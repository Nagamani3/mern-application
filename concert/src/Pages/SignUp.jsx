import React, { useState } from 'react'
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import {MdOutlinePassword} from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import axios from 'axios';

const SignUp = () => {
  let [form, setForm] = useState({ name:"",email: "", password: "" ,confirmpassword:""})
  
  let {email,password,name,confirmpassword} = form
  let handleChange = (e) => {
    let { name,value} = e.target;
    setForm({...form,[name]:value})
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    setForm(form)
    console.log(form)
    await axios.post("http://localhost:5000/api/register",form);
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>

        <span style={{ color: 'rgb(254, 0, 59)' }}>
          <FiUserCheck></FiUserCheck>
          <p>username</p>
        </span>

        <input type="text" name="name" value={name}onChange={handleChange} />

        <span>
          <MdOutlineMarkEmailRead></MdOutlineMarkEmailRead>
          <p>email</p>
        </span>

        <input type="text" name="email" value={email} onChange={handleChange} />
        <span>
          <MdOutlinePassword></MdOutlinePassword>
          <p>password</p>
        </span>
        <input type="text" name="password" value={password} onChange={handleChange} />
        <span>
          <GiConfirmed></GiConfirmed>
          <p>confirm password </p>
          <p></p>
        </span>
        <input type="text" name="confirmpassword"  value={confirmpassword}onChange={handleChange} />

        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp