import "../styles/Authentication.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Register() {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username || !email || !password || !confirmPassword){
            alert("Please fill in all required fields");
            return;
        }

        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        
        axios.post("http://localhost:8080/register", {username, password, email})
        .then(result => {
            setSuccess("Registration successful")
            console.log(result);
            navigate('/login');
        })
        .catch(err => {
            if (err.response && err.response.status === 409) {
                setError("Username already exists");
            } else {
                setError("An error occurred during registration. Please try again.");
            }
            setSuccess("");
            console.log(err);
        });
    }
    
    return (
        <div>
            <div className="background">
                <span><p>Forest</p></span>
                <span><p>River</p></span>
                <span><p>Mountain</p></span>
                <span><p>Valley</p></span>
                <span><p>Tree</p></span>
                <span><p>Leaf</p></span>
                <span><p>Stream</p></span>
                <span><p>Meadow</p></span>
                <span><p>Rock</p></span>
                <span><p>Cliff</p></span>
                <span><p>Hill</p></span>
                <span><p>Path</p></span>
                <span><p>Wildflower</p></span>
                <span><p>Glade</p></span>
                <span><p>Canyon</p></span>
                <span><p>Pine</p></span>
                <span><p>Branch</p></span>
                <span><p>Grass</p></span>
                <span><p>Waterfall</p></span>
                <span><p>Creek</p></span>
                <span><p>Stone</p></span>
                <span><p>Fern</p></span>
                <span><p>Oak</p></span>
                <span><p>Birch</p></span>
                <span><p>Willow</p></span>
                <span><p>Breeze</p></span>
                <span><p>Cloud</p></span>
                <span><p>Sky</p></span>
                <span><p>Sunrise</p></span>
                <span><p>Sunset</p></span>
                <span><p>Shadow</p></span>
                <span><p>Lake</p></span>
                <span><p>Island</p></span>
                <span><p>Bay</p></span>
                <span><p>Shore</p></span>
                <span><p>Sand</p></span>
                <span><p>Dune</p></span>
                <span><p>Wave</p></span>
                <span><p>Tide</p></span>
                <span><p>Harbor</p></span>
                <span><p>Driftwood</p></span>
                <span><p>Seashell</p></span>
                <span><p>Lagoon</p></span>
                <span><p>Coral</p></span>
                <span><p>Reef</p></span>
                <span><p>Current</p></span>
                <span><p>Pelican</p></span>
                <span><p>Seagull</p></span>
                <span><p>Dolphin</p></span>
                <span><p>Whale</p></span>
            </div>
            <section className="auth-section">
                <div className="auth-container">
                    <img className='auth-logo' src="/logo.png" alt="" />
                    <h1>Register</h1>
                    <form onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" id="name" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input required type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input required type="password" id="confirm-password" name="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button className="login-submit-btn" type="submit">Sign Up</button>
                    </form>
                    <h4>Already have an account?<span><Link to={"/Login"}>Login</Link></span></h4>
                </div>
            </section>
        </div>
    )
}
