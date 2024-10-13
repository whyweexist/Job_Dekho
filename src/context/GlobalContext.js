import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    //navigate
    const navigate = useNavigate();
    //states
    const [data, setData] = useState([]);
    const [jobDetail, setJobDetail] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [filtered, setFiltered] = useState(data);
    const [input, setInput] = useState({
        company_city: "",
        company_image_url: "",
        company_name: "",
        job_description: "",
        job_qualification: "",
        job_status: 1,
        job_tenure: "Fulltime",
        job_type: "On-Site",
        salary_max: "",
        salary_min: "",
        title: "",
    });
    const [currentID, setCurrentID] = useState(-1);
    const [fetchStatus, setFetchStatus] = useState(true);
    const token = Cookies.get("token");

    //fetching data
    const fetchData = () => {
        axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                let result = res.data.data;
                setData(result);
                //console.log(result);
            })
            .catch((err) => console.log(err));
        setFetchStatus(false);
    };

    // handle see details button
    const seeDetail = (e) => {
        let idJob = parseInt(e.target.value);
        navigate(`job-detail/${idJob}`);
    };
    const seeDetailDashboardMode = (e) => {
        let idJob = parseInt(e.target.value);
        //console.log(idJob);
        navigate(`dashboard/job-detail/${idJob}`);
    };

    const handleSearch = () => {
        setFiltered(
            data.filter((job) => {
                if (
                    job.title.toLowerCase().match(keyword.toLocaleLowerCase())
                ) {
                    return job;
                }
            })
        );
    };

    const handleInput = (e) => {
        const { name, value, checked } = e.target;
        const newValue = name === "job_status" ? (checked ? 1 : 0) : value;
        setInput((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const addJob = (e) => {
        e.preventDefault();
        let url = "https://dev-example.sanbercloud.com/api/job-vacancy";
        if (currentID === -1) {
            axios
                .post(
                    url,
                    { ...input },
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                .then(() => {
                    setFetchStatus(true);
                    navigate("dashboard");
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .put(
                    `${url}/${currentID}`,
                    { ...input },
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                .then(() => {
                    setFetchStatus(true);
                    navigate("dashboard");
                })
                .catch((err) => console.log(err));
        }
        setCurrentID(-1);
        setInput({
            company_city: "",
            company_image_url: "",
            company_name: "",
            job_description: "",
            job_qualification: "",
            job_status: 1,
            job_tenure: "Fulltime",
            job_type: "On-Site",
            salary_max: "",
            salary_min: "",
            title: "",
        });
    };

    const clickAdd = () => {
        setCurrentID(-1);
        setInput({
            company_city: "",
            company_image_url: "",
            company_name: "",
            job_description: "",
            job_qualification: "",
            job_status: 1,
            job_tenure: "Fulltime",
            job_type: "On-Site",
            salary_max: "",
            salary_min: "",
            title: "",
        });
    };

    const editJob = (e) => {
        let idJob = parseInt(e.target.value);
        // console.log(idJob);
        setCurrentID(idJob);
        navigate(`dashboard/edit-job/${idJob}`);
    };

    const deleteJob = (e) => {
        let idJob = parseInt(e.target.value);
        axios
            .delete(
                `https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(() => setFetchStatus(true))
            .catch((err) => console.log(err));
    };

    const states = {
        data,
        setData,
        jobDetail,
        setJobDetail,
        keyword,
        setKeyword,
        filtered,
        setFiltered,
        fetchStatus,
        setFetchStatus,
        input,
        setInput,
        token,
        currentID,
        setCurrentID,
    };
    const func = {
        fetchData,
        seeDetail,
        seeDetailDashboardMode,
        handleSearch,
        handleInput,
        deleteJob,
        addJob,
        editJob,
        clickAdd,
    };

    return (
        <GlobalContext.Provider value={{ states, func }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
