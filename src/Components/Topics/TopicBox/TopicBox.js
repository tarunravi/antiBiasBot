import React from 'react'
import './TopicBox.css'
import Article from './Article/Article'

function TopicBox() {
    return (
        <div className="TopicBox">
            <h1>Topic One's Name</h1>
            <div className="divider" />
            <Article />
        </div>
    )
}

export default TopicBox
