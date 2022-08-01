import React, { useEffect, useState } from "react";
import "../../assets/style.css";
import {Link, useNavigate} from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Reset = () =>{
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login_page">
            <div className="form">
                <h1>Reset Password</h1>
                <div className="form-group">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button 
                    className="w-100 btn btn-lg btn-warning mt-4"
                    onClick={() => sendPasswordReset(email)}
                    >
                        Send Password Reset Email
                    </button>
                </div>
                <p className="text-white mt-4">
                    <strong>
                        Back to
                        <Link to={"/login"} className="text-warning ml-2">Login</Link>
                    </strong>
                </p>
            </div>
        </div>
    )
}
export default Reset;