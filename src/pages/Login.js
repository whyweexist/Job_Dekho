import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FaBlackTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = input;

        axios
            .post("https://dev-example.sanbercloud.com/api/login", {
                email,
                password,
            })
            .then((e) => {
                let data = e.data;
                let { token } = data;
                Cookies.set("token", token, { expires: 1 });
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div
                data-theme="light"
                className="grid place-content-center h-screen"
            >
                <div
                    to="/"
                    className="normal-case text-xl font-bold flex items-center"
                >
                    <i>
                        <FaBlackTie className="text-primary mr-1" />
                    </i>
                    JOB DHEKO
                </div>
                <form
                    className="card lg:w-[420px] shadow-2xl"
                    onSubmit={handleSubmit}
                >
                    <div className="card-body flex flex-col">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            autoFocus
                            type="email"
                            placeholder="email"
                            name="email"
                            value={input.name}
                            onChange={handleChange}
                            required
                            className="input input-bordered input-primary"
                        />

                        <label className="label mt-2">
                            <span className="label-text font-bold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            required
                            minLength="8"
                            className="input input-bordered input-primary"
                        />
                        <p className="text-xs text-secondary cursor-default mt-2">
                            Dont Have Account?
                            <span className="font-bold cursor-pointer text-primary ml-1 hover:underline">
                                <Link to="/register">Sign Up</Link>
                            </span>
                        </p>
                        <button className="btn btn-primary mt-7" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
