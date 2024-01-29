import { FormEvent, useState } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo-blue.svg";
import "./style.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        try {
            event.preventDefault();

            await auth.authenticate(email, password);

            navigate("/dashboard");
        } catch (error) {
            console.log("Aqui:" + auth);
            alert("Invalid email or password");
        }
    }

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="login-form-title">
                            <img src={logo} alt="Logo QoS" />
                        </span>
                        <span className="login-form-title">Bem Vindo!</span>

                        <div className="wrap-input">
                            <input
                                className={
                                    email !== "" ? "has-value input" : "input"
                                }
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span
                                className="focus-input"
                                data-placeholder="Email"
                            ></span>
                        </div>
                        <div className="wrap-input">
                            <input
                                className={
                                    password !== ""
                                        ? "has-value input"
                                        : "input"
                                }
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="focus-input"
                                data-placeholder="Password"
                            ></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>
                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                            <a href="#" className="txt2">
                                Criar conta.
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
