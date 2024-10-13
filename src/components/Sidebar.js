import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsViewList } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";

const Sidebar = () => {
    const { func } = useContext(GlobalContext);
    const { clickAdd } = func;
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove("token");
        navigate("/");
    };

    return (
        <div className="menu pl-10 pt-10 min-h-full flex flex-col gap-10 font-semibold">
            <NavLink
                to="post-job"
                className="btn animate-text bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-center w-[80%]"
            >
                <button onClick={clickAdd}>Add Job Vacancy</button>
            </NavLink>

            <NavLink
                to="/dashboard"
                className="hover:text-secondary flex items-center gap-2"
            >
                <i className="text-xl">
                    <BsViewList />
                </i>
                <span>Job Vacancies</span>
            </NavLink>
            <NavLink
                to="profile"
                className="hover:text-secondary flex items-center gap-2"
            >
                <i className="text-xl">
                    <FiUser />
                </i>
                <span>Profile</span>
            </NavLink>
            <div
                to="profile"
                className="hover:text-secondary flex items-center gap-2 mt-10 cursor-pointer"
                onClick={logout}
            >
                <i className="text-xl">
                    <MdLogout />
                </i>
                <span>Logout</span>
            </div>
            <NavLink
                to="/"
                className="hover:text-secondary flex items-center gap-2 mt-10"
            >
                <i className="text-xl">
                    <RxHome />
                </i>
                <span>Homepage</span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
