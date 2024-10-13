import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const FeatureList = () => {
    const { states, func } = useContext(GlobalContext);
    const { data } = states;
    const { fetchData, seeDetail } = func;

    useEffect(() => {
        fetchData();
    }, []);

    //mengacak data yang akan ditampilkan
    // const randomComparator = () => 0.5 - Math.random();
    // const randomJobs = data.sort(randomComparator).slice(0, 4);

    //tampilkan data secara acak
    const jobListElement = data.slice(0, 4).map((job) => {
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
                            className="btn btn-primary btn-sm"
                            value={job.id}
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
        <div className="">
            <h2 className="font-bold text-3xl text-center my-5 lg:mb-10">
                Featured<span className="text-primary">Jobs</span>
            </h2>
            <div className="list-grid">{jobListElement}</div>
            <div className="grid place-content-center mt-5 lg:mt-10">
                <Link to="explore-jobs" className="btn btn-secondary ">
                    See All Jobs
                </Link>
            </div>
        </div>
    );
};

export default FeatureList;
