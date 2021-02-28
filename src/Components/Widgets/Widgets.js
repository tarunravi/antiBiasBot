import React from 'react'
import './Widgets.css'
import Weather from './Weather/Weather';
import { Component, useState, useEffect  } from "react";
const url = 'https://geolocation-db.com/json/344ec440-6bfc-11eb-a0c0-b5dee9e67313';

function Widgets() {
    const [details, setDetails] = useState([]);
    const getDetails = async()=>{
        const response = await fetch(url);
        const details = await response.json();
        setDetails(details);
    }

    useEffect(() => {
        getDetails();
    },[]);

    return (
        <div className="Widgets">
            <div className="weatherBox">
               
                {details.latitude ? <Weather lon={details.longitude} lat={details.latitude}name={details.city} /> : ""}
            </div>
        </div>
    )
}

export default Widgets
