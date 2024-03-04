import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged,  } from 'firebase/auth';
import { app } from '../../Context/Firebase';


const auth = getAuth(app)
function Login() {
    const {islogg} = useFirebase();
    const navigate =  useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signinUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((value) => alert("success")).catch((error) => alert("something is wrong", error));
        setEmail("")
        setPassword("")
        islogg === True

    }
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user)
            else setUser(null)
        })
    } ,[])
    const isloggedIn = user  ? true : false ;
    useEffect(()=>{
        if (!isloggedIn){
            navigate("/Home")
        }else{
            navigate("/Signup")
        }
    },[isloggedIn, navigate])
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-3xl font-semibold mb-4 text-center">Instagram</h1>
        <form   class="space-y-4"  >
            <div>
                <label  class="block font-semibold"
               
                >Username</label>
                <input type="email" 
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                id="username" name="username" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <div>
                <label  class="block font-semibold"
                
                >Password</label>
                <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password" name="password" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <button onClick={signinUser}  class="w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition duration-300">Log In</button>
        </form>
        <div class="mt-4 text-center">
            <NavLink to="/Signup"class="text-blue-500 hover:underline">Forgot Password?</NavLink>
        </div>
       
    </div>
</div>
  )
}

export default Login
