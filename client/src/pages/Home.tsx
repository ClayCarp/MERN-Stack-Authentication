import "../styles/Home.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <section className="home">
                <div className="content-container">
                        <Link className="home-btn" to="/Login">Login</Link>
                </div>
            </section>
        </>
    );
}