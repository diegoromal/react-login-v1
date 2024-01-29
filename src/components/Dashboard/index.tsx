import { useRef } from "react";
import logo from "../../assets/logo-white.svg";
import "./style.css";

export const Dashboard = () => {
    const navRef = useRef<any>(null);
    const btnBurgerRef = useRef<any>(null);

    const handleBurgerClick = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("active");
        }
    };

    return (
        <div className="container">
            <header className="header">
                <nav className="nav" ref={navRef}>
                    <ul className="nav-list">
                        <li>
                            <a href="#">Menu 01</a>
                        </li>
                        <li>
                            <a href="#">Menu 02</a>
                        </li>
                        <li>
                            <a href="#">Menu 03</a>
                        </li>
                    </ul>
                    <a href="/dashboard" className="logo">
                        <img src={logo} alt="Logo QoS" />
                    </a>
                    <button
                        ref={btnBurgerRef}
                        onClick={handleBurgerClick}
                        className="btn-burger"
                    ></button>
                </nav>
            </header>
            <main className="hero"></main>
        </div>
    );
};
