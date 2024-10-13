import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div
            data-theme="light"
            className="grid h-screen px-4 place-content-center"
        >
            <div className="text-center">
                <h1 class="font-black text-primary text-9xl">404</h1>

                <p className="text-2xl font-bold tracking-tight sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 mb-4">We can't find that page.</p>

                <Link to="/" className="btn btn-secondary">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
