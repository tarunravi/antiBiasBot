import React from 'react'
import './TopicBox.css'
import Article from './Article/Article'

function TopicBox({topicName, article1, article2, article3}) {
    console.log(article1)
    return (
        <div className="TopicBox">
            <h1>{topicName}</h1>
            <div className="topicDivider" />
            <Article 
                    articleImageLink={article1.imageLink}
                    publisherIcon={article1.publisherIcon}
                    bias={article1.bias}
                    artileTitle={article1.title}
                    articleLink={article1.link}
                    />
            <div className="topicDivider" />

            <Article 
                    articleImageLink={article2.imageLink}
                    publisherIcon={article2.publisherIcon}
                    bias={article2.bias}
                    artileTitle={article2.title}
                    articleLink={article2.link}
                    />
            <div className="topicDivider" />

            <Article 
                    articleImageLink={article3.imageLink}
                    publisherIcon={article3.publisherIcon}
                    bias={article3.bias}
                    artileTitle={article3.title}
                    articleLink={article3.link}
                    />
            <div className="topicDivider" />

        </div>
    )
}

export default TopicBox
