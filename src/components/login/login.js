import React, { useEffect, useState } from "react";
import "../../assets/style.css";
import logo from "../../assets/images/google_logo.png";
import {Link, useNavigate} from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login_page">
            <div className="form">
                <h1>Login</h1>
                <div className="form-group">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                    className="form-control" 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                        <button 
                        className="w-100 btn btn-lg btn-danger mt-4"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                        >
                            LOGIN
                        </button>
                    </div>
                    <div className="col-md-6">
                        <Link to="/reset" className="w-100 btn btn-lg btn-warning mt-4">
                            Forgot Password
                        </Link>
                    </div>
                    </div>
                    <p className="mt-4 text-white">
                        OR<br />Login with
                        <a className="ml-2" onClick={signInWithGoogle}>
                            <img 
                            src={logo}
                            className="bg-white p-1 border rounded"
                            style={{maxWidth:"2em"}}
                            />
                        </a>
                    </p>
                </div>
                <p className="text-white mt-2">
                    <strong>
                        New User?
                        <Link to={"/register"} className="text-warning ml-2">Register</Link>
                    </strong>
                </p>
            </div>
        </div>
    )
}
export default Login;