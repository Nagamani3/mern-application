import React, { useContext, useState } from 'react'
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import axios from 'axios';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  let navigate = useNavigate()
  let [token,setToken]=useContext(store)
  let [form, setForm] = useState({
   
    email: "",
    password: "",
  
  });
  
  if (token) {
    navigate("/")
  }

  let { email, password} = form;
  let handleChange = e => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    setForm(form);
    console.log(form);
   let jwt =  await axios.post("http://localhost:5000/api/login",form);
  setToken(jwt.data)
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "50px" }}> LOG IN</h1>

        <span>
          <MdOutlineMarkEmailRead></MdOutlineMarkEmailRead>
          <p>email</p>
        </span>

        <input type="text" name="email" value={email} onChange={handleChange} />
        <span>
          <MdOutlinePassword></MdOutlinePassword>
          <p>password</p>
        </span>
        <input type="text" name="password" value={password} onChange={handleChange}/>

        
        <button>log in</button>
      </form>

    </div>
  );
}

export default Login