import React, { useState,useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,} from 'firebase/auth';
import { app, useFirebase } from '../../Context/Firebase';
import { Link, NavLink, useNavigate} from 'react-router-dom';
const auth = getAuth(app)
const Signup = () => {
    const firebase = useFirebase();
    console.log(firebase);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupuser = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("success")).catch((error) => alert(error.message) );
        setEmail("")
        setPassword("")
        navigate("/Home")
    }
    const navigate =  useNavigate()
    
  
  
  return (
    
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">Instagram</h1>
       
        <div  className="space-y-4"  >
            <div>
                <label  className="block font-semibold"
                >Email</label>
                <input type="email"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                id="username" name="username" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <div>
                <label  className="block font-semibold"
               >Password</label>
                <input type="password" 
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                id="password" name="password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <button onClick={signupuser} className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition duration-300">Create Account</button>
        </div>
        <div className="mt-4 text-center">
            <Link className="text-blue-500 hover:underline">Forgot Password?</Link>
        </div>
        <div className="mt-4 text-center">
            <span className="text-gray-600">Don't have an account?</span>
            <NavLink to="/LogIn" className="text-blue-500 hover:underline">Log In</NavLink>
        </div>
    </div>
</div>
  )
}

export default Signup
