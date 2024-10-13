import React from "react";
import { FaBlackTie, FaTwitter, FaGithub, FaGitlab } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer px-5 lg:px-28 py-10 bg-primary text-white mt-20">
            <div>
                <Link
                    to="/"
                    className="normal-case text-xl font-bold flex items-center"
                >
                    <i>
                        <FaBlackTie className="text-white mr-1" />
                    </i>
                    JOB Dheko
                </Link>
                <p>Coded by Team Tech Dreamers</p>
            </div>
            <div>
                <span className=" text-lg font-semibold">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link to="#">
                        <FaTwitter className="text-2xl hover:text-secondary" />
                    </Link>
                    <Link to="https://github.com/whyweexist">
                        <FaGithub className="text-2xl hover:text-secondary" />
                    </Link>
                    <Link to="https://github.com/whyweexist">
                        <FaGitlab className="text-2xl hover:text-secondary" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
