import React from "react";
import ilustrasi from "../assets/ilustrasi.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero h-[60vh] lg:h-[75vh] lg:px-24">
            <div className="hero-content flex-col justify-start lg:flex-row">
                <div>
                    <h1 className="text-6xl font-extrabold font-geologica animate-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Find Your Dream Job
                    </h1>
                    <p className="py-6 font-medium text-lg">
                        Platform to Explore Various Jobs and kick start you career
                        
                    </p>
                    <Link
                        to="explore-jobs"
                        className="btn btn-outline btn-primary rounded border-2"
                    >
                        Explore Jobs
                    </Link>
                </div>
                <img
                    src={ilustrasi}
                    alt="ilustrasi"
                    className="w-2/4 hidden lg:block"
                />
            </div>
        </div>
    );
};

export default Hero;
