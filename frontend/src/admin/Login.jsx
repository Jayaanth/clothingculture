import {
 useState
} from "react";

import {
 useNavigate
} from "react-router-dom";

import adminApi
from "../services/adminApi";

export default function Login(){

 const navigate =
 useNavigate();

 const [username,
 setUsername] =
 useState("");

 const [password,
 setPassword] =
 useState("");

 const login =
 async()=>{

  const res =
  await adminApi.post(
   "/login",
   {
    username,
    password
   }
  );

  localStorage.setItem(
   "token",
   res.data.access_token
  );

  navigate("/admin");

 };

 return(

  <div className="login-page">

   <h1>
    Admin Login
   </h1>

   <input
    placeholder="Username"
    onChange={(e)=>
     setUsername(
      e.target.value
     )
    }
   />

   <input
    type="password"
    placeholder="Password"
    onChange={(e)=>
     setPassword(
      e.target.value
     )
    }
   />

   <button
    onClick={login}
   >
    Login
   </button>

  </div>

 );

}