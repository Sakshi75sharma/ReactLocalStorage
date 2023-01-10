import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {

  const section = {
    position: "absolute",
    top: "25%",
    left: "34%",
    borderRadius: "8px",
    backgroundColor: "white",
    padding: "8px 25px",
  }

  const button = {
    borderRadius: "4px",
    backgroundColor: "aqua",
    color: "white",
    borderColor: "aqua",
    fontWeight: "bold",
  }

  const input = {
    marginBottom: "10px",
    width: "100%",
    borderColor: "aqua",
    borderRadius: "4px",
    height: "35px",
  }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();

        if(!email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in local storage");
            navigate("/dummypage");
        }
    }
  return (
    <div style={section}>
        <form onSubmit={handleSubmit} style={{padding : "20px"}}>
          <h2>Welcome User</h2>
            <div className='input'>
              <label style={{float: "left"}}>Email:</label>
               <input style={input} type="email" placeholder='Enter Email Address' 
               onChange={(e) => setEmail(e.target.value)}/> 
            </div>
            <div className='input'>
              <label style={{float: "left"}}>Password: </label>
              <input style={input}  type="password" placeholder='Enter Password' 
              onChange={(e) => setPassword(e.target.value)}/> 
            </div>
            <button className='btn btn-primary' style={button}>Login</button>
        </form>
    </div>
  )
}
