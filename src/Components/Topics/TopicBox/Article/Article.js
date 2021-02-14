import React from 'react'
import './Article.css'
export default function Article({articleImageLink, publisherIcon, bias, artileTitle, articleLink}) {
    return (
        <a href={articleLink} target="_blank">
            <div className="Article">
                <div className="articleLeft">
                    <div className="articleLeftTopBar">
                        <img src={publisherIcon}></img>
                        <h3>{bias}</h3>
                    </div>
                    <div className="articleLeftBottomBar">
                        <h1>{artileTitle}</h1>
                    </div>
                </div>
                <div className="articleRight">
                    <img src={articleImageLink} alt={artileTitle}></img>
                </div>
            </div>
        </a>
    )
}
