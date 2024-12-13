import React,{useState, useEffect} from "react";
export default function Api(){
    const url="http://localhost:5000";
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setData({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);

    return (
        <div>
            <h1>React and flask</h1>
            {/* Calling a data from setdata for showing */}
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.date}</p>
            <p>{data.programming}</p>
        </div>
    );
}