import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginRoute = () => {
    if (Cookies.get("token") !== undefined) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default LoginRoute;
