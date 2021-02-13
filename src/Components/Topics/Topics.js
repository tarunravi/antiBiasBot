import React from 'react'
import './Topics.css'
import TopicBox from './TopicBox/TopicBox'
function Topics() {
    return (
        <div className="Topics">
            <div className="topHeader">
                <h1>Hear both side's perspective</h1>
            </div>
            <div className="TopicLists">
                <TopicBox />
                <TopicBox />
                <TopicBox />
                <TopicBox />
                <TopicBox />
                <TopicBox />
                <TopicBox />
                <TopicBox />
            </div>
            
        </div>
    )
}

export default Topics
