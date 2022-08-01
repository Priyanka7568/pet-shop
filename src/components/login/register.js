import React, { useState, useEffect} from "react";
import "../../assets/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase";
import {Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login_page">
            <div className="form">
                <h1>Register</h1>
                <div className="form-group">
                    <input
                        className="form-control" 
                        type="text"
                        autoComplete="off"
                        required
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control" 
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="w-100 btn btn-lg btn-danger mt-4"
                        onClick={register}
                    >
                        Register
                    </button>
                </div>
                <p className="text-white mt-2">
                    <strong>
                        Already have an account? 
                        <Link to={"/login"} className="text-warning ml-2">Login</Link>
                    </strong>
                </p>
            </div>
        </div>
    )
}
export default Register;