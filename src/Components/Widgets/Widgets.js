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
            <div className="topicListBox">
                <h1>Topic List</h1>
                <div className="topicListDivider" />
                <div className="topicList">
                    <h2>Covid</h2>
                    <h2>Fauci</h2>
                    <h2>Biden</h2>
                    <h2>Stimulus Checks</h2>
                    <h2>Royal Family</h2>
                    <h2>Xavier Becerra</h2>
                    <h2>Nomination</h2>
                    <h2>Cabinet</h2>
                    <h2>Andrew Cuomo</h2>
                    <h2>Trump</h2>
                    <h2>Pentagon</h2>
                    <h2>Texas</h2>
                    <h2>Border</h2>
                    <h2>Biden's Dog</h2>
                    <h2>Supreme Court</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Widgets
