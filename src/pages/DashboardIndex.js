import React, { useContext } from "react";
import AllJobList from "../components/AllJobList";
import { GlobalContext } from "../context/GlobalContext";

const DashboardIndex = () => {
    const { states, func } = useContext(GlobalContext);
    const { filtered, keyword } = states;
    const { seeDetailDashboardMode, editJob, deleteJob } = func;

    const filteredElements = filtered.map((job) => {
        return (
            <>
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
                            <div className="join flex gap-1">
                                <button
                                    value={job.id}
                                    className="btn join-item btn-primary btn-sm"
                                    onClick={seeDetailDashboardMode}
                                >
                                    Details
                                </button>
                                <button
                                    value={job.id}
                                    className="btn join-item btn-warning btn-sm"
                                    onClick={editJob}
                                >
                                    Edit
                                </button>
                                <button
                                    value={job.id}
                                    className="btn join-item btn-error btn-sm"
                                    onClick={deleteJob}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });

    return (
        <div className="list-job">
            {keyword === "" ? (
                <AllJobList dashboardMode />
            ) : filtered.length === 0 ? (
                <p className="text-center text-lg font-bold min-h-[40vh]">
                    No Result Found
                </p>
            ) : (
                filteredElements
            )}
        </div>
    );
};

export default DashboardIndex;
