import React from 'react'
import './TopicBox.css'
import Article from './Article/Article'

function TopicBox() {
    return (
        <div className="TopicBox">
            <h1>Topic One's Name</h1>
            <div className="topicDivider" />
            <Article 
                    articleImageLink="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iywkDhBWuNM4/v1/1000x-1.jpg" 
                    publisherIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png"
                    bias="left bias"
                    artileTitle="Donald Trump: Who He Is and What He Stands For"
                    articleLink="https://www.google.com/"
                    />
            <div className="topicDivider" />

            <Article 
                    articleImageLink="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iywkDhBWuNM4/v1/1000x-1.jpg" 
                    publisherIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png"
                    bias="left bias"
                    artileTitle="Donald Trump: Who He Is and What He Stands For"
                    articleLink="https://www.google.com/"
                    />
            <div className="topicDivider" />

            <Article 
                    articleImageLink="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iywkDhBWuNM4/v1/1000x-1.jpg" 
                    publisherIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png"
                    bias="left bias"
                    artileTitle="Donald Trump: Who He Is and What He Stands For"
                    articleLink="https://www.google.com/"
                    />
            <div className="topicDivider" />

        </div>
    )
}

export default TopicBox
