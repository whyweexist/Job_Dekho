import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const JobDetail = () => {
    const { idJob } = useParams();
    const { states } = useContext(GlobalContext);
    const { jobDetail, setJobDetail } = states;
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`)
            .then((res) => {
                setJobDetail(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const {
        title,
        company_city,
        company_image_url,
        company_name,
        job_description,
        job_qualification,
        job_tenure,
        job_type,
        salary_max,
        salary_min,
    } = jobDetail;

    return (
        <div className="card flex mx-2 shadow-xl p-5 justify-around lg:mx-36">
            <div
                onClick={() => navigate(-1)}
                className=" underline underline-offset-2 text-md font-medium text-secondary mb-7"
            >
                <div className="flex items-center gap-1 font-bold cursor-pointer">
                    <HiOutlineArrowNarrowLeft />
                    Back
                </div>
            </div>
            <div className="flex flex-col items-center mb-5">
                <img src={company_image_url} className="max-w-[200px] mb-3" />
                <p className="font-bold text-xl">{company_name}</p>
                <p>{company_city}</p>
                <p>({job_type})</p>
            </div>
            <div className=" flex flex-col gap-3 items-start">
                <h1 className="font-bold text-primary text-3xl">{title}</h1>
                <div className="badge badge-accent font-medium">
                    {job_tenure}
                </div>
                <p className="font-medium">Job Description</p>
                <p>{job_description}</p>
                <p className="font-medium">Qualification</p>
                <p>{job_qualification}</p>
                <p className="font-medium">Salary</p>
                <p className="">{`Rp.${salary_min} - Rp.${salary_max}`}</p>
            </div>
        </div>
    );
};

export default JobDetail;
