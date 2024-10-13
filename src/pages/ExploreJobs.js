import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import AllJobList from "../components/AllJobList";
import { GlobalContext } from "../context/GlobalContext";

const ExplereJobs = () => {
    const { states, func } = useContext(GlobalContext);
    const { filtered, keyword } = states;
    const { seeDetail } = func;

    const filteredElements = filtered.map((job) => {
        return (
            <div className="card bg-base-100 shadow-xl" key={job.id}>
                <div className="card-body">
                    <div className="flex justify-between">
                        <img
                            src={job.company_image_url}
                            className="h-10 w-14"
                            alt="logo-company"
                        />
                        <div className="badge badge-accent justify-end font-medium">
                            {job.job_tenure}
                        </div>
                    </div>
                    <h2 className="card-title text-lg text-primary font-bold">
                        {job.title}
                    </h2>

                    <p className="text-xs text-secondary">
                        {`${job.company_name} | ${job.company_city} (${job.job_type})`}
                    </p>
                    <p className="text-xs">
                        {job.job_description === null
                            ? "-"
                            : job.job_description.length > 60
                            ? job.job_description.substr(0, 60) + "..."
                            : job.job_description}
                    </p>
                    <p className=" text-xs mb-7">{`Rp.${job.salary_min} - Rp${job.salary_max}`}</p>
                    <div className="card-actions justify-end">
                        <button
                            value={job.id}
                            className="btn btn-primary btn-sm"
                            onClick={seeDetail}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="hero min-h-[25vh] animate-text bg-gradient-to-bl from-primary to-secondary py-10 mb-5">
                <div className="flex flex-col items-center gap-10">
                    <div>
                        <h1 className="text-3xl font-bold text-center text-neutral-content font-geologica">
                            Find Your Dream Job
                        </h1>
                    </div>
                    <SearchBar color="input-secondary" />
                </div>
            </div>
            <div className="px-20">
                <div className="list-grid">
                    {keyword === "" ? (
                        <AllJobList />
                    ) : filtered.length === 0 ? (
                        <p className="text-center text-lg font-bold min-h-[40vh]">
                             No result found
                        </p>
                    ) : (
                        filteredElements
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExplereJobs;
