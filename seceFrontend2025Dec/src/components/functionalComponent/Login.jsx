import {Link} from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const  Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=async(event)=>{
        event.preventDefault()
        const req=await axios.post('hhtp://localhost:8001',{
            email:email,
            password:password
        })
        console.log(req.data);
        const isLogin=req.data.isLoggedIn
        if(isLogin){
            navigate('/')
        }else{
            navigate('/login')
        }

    };
    
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="email"id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>

                </div>
                <br/>
                <button type="submit">Login</button>
                <br/>
            </form>
            <p>
                Create an account<Link to="/signup">Signup</Link>
            </p>
        </div>
    )
}
export default Login;