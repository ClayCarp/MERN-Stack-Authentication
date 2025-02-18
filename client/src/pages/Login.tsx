import React from 'react'
import "../styles/Authentication.css"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const sceneRef = useRef<HTMLElement>(null);

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            const result = await axios.post("http://localhost:8080/auth", { username, password });
            if (result.data.message === "Login successful") {
                localStorage.setItem("isAuthenticated", "true");
                navigate('/Home', { replace: true });
            } else if (result.data.message === "Incorrect password") {
                alert("Incorrect email or password");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <main className="scene" ref={sceneRef}></main>
            <section className="auth-section">
                <div className="auth-container">
                    <h1>Login</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input required type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-submit-btn" type="submit">Login</button>
                    </form>
                    <h4>Don't have an account?<span><Link to={"/Register"}>Sign up</Link></span></h4>
                </div>
            </section>
        </div>
    );
}
