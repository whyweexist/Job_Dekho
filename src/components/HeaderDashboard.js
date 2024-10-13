import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBlackTie } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";

const HeaderDashboard = () => {
    const { func } = useContext(GlobalContext);
    const { clickAdd } = func;
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove("token");
        navigate("/");
    };

    return (
        <div className="navbar px-4 lg:pr-20 lg:h-[10vh]">
            <div className="navbar-start">
                <div className="hidden lg:block">
                    <NavLink
                        to="/"
                        className="normal-case text-lg font-bold flex items-center"
                    >
                        <i>
                            <FaBlackTie className="text-primary mr-1" />
                        </i>
                        JOb Dekho
                    </NavLink>
                </div>
                <div className="dropdown">
                    <div className="lg:hidden">
                        <HiMenuAlt2 className="text-2xl" tabIndex={0} />
                    </div>

                    <div
                        className="mt-2 dropdown-content absolute bg-base-100 shadow-lg w-52 px-4 py-7 rounded-box flex flex-col gap-5"
                        tabIndex={0}
                    >
                        <NavLink
                            to="post-job"
                            className="btn animate-text bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-center w-[80%]"
                        >
                            <button onClick={clickAdd}>Add Job</button>
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
                        <NavLink
                            to="/"
                            onClick={logout}
                            className="hover:text-secondary flex items-center gap-2 mt-10"
                        >
                            <i className="text-xl">
                                <MdLogout />
                            </i>
                            <span>Logout</span>
                        </NavLink>
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
                </div>
            </div>

            <div className="navbar-end">
                <SearchBar color="base-100" />
            </div>
        </div>
    );
};

export default HeaderDashboard;
