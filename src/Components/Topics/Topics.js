import React from 'react'
import './Topics.css'
import TopicBox from './TopicBox/TopicBox'
function Topics() {
    return (
        <div className="Topics">
            <div className="topHeader">
                <h1 className="desktop">Hear both side's perspective</h1>
                <h1 className="mobile">Anti Bias Bot</h1>
            </div>
            <div className="TopicLists">
                <TopicBox topicName="Fauci Covid Vaccine" 
                            article1={{
                                imageLink: "https://d1vhqlrjc8h82r.cloudfront.net/02-23-2021/t_ca862c1811b04fc08f8005353c1919fc_name_image.jpg",
                                publisherIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png",
                                bias:"left bias",
                                title:"Fauci says CDC guidance for fully vaccinated people could come soon",
                                link:"https://www.cnn.com/world/live-news/coronavirus-pandemic-vaccine-updates-02-23-21/h_e3fd4a60286d92534f2001912f3540d9"}}
                            article2={{
                                imageLink: "https://static.reuters.com/resources/r/?m=02&d=20210223&t=2&i=1552595058&r=LYNXMPEH1M0PU&w=800",
                                publisherIcon: "https://logos-download.com/wp-content/uploads/2016/05/Reuters_logo_emblem.png",
                                bias:"center bias",
                                title:"Fauci says he sees U.S. CDC relaxing some COVID-19 guidelines soon: CNN",
                                link:"https://www.reuters.com/article/us-health-coronavirus-usa-fauci/fauci-says-he-sees-u-s-cdc-relaxing-some-covid-19-guidelines-soon-cnn-idUSKBN2AN17G"}}
                            article3={{
                                imageLink: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/01/640/320/AP21021483935286.jpg?ve=1&tl=1",
                                publisherIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/300px-Fox_News_Channel_logo.svg.png",
                                bias:"right bias",
                                title:"Fauci’s mixed messages, inconsistencies about COVID-19 masks, vaccines and reopenings come under scrutiny",
                                link:"https://www.foxnews.com/politics/faucis-mixed-messages-inconsistencies-about-covid-19-masks-vaccines-and-reopenings-come-under-scrutiny"}}
                                />
                                
                <TopicBox topicName="Xavier Becerra Senate Committee" 
                            article1={{
                                imageLink: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210219140325-xavier-becerra-nov-2019-restricted.jpg",
                                publisherIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png",
                                bias:"left bias",
                                title:"Republicans question Becerra on abortion and health care experience",
                                link:"https://www.cnn.com/2021/02/23/politics/health-and-human-services-confirmation-xavier-becerra/index.html"}}
                            article2={{
                                imageLink: "https://storage.googleapis.com/afs-prod/media/f3d13df9ee764b6ebdeca3c199ec5c7b/800.jpeg",
                                publisherIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/1200px-Associated_Press_logo_2012.svg.png",
                                bias:"center bias",
                                title:"HHS pick says pandemic is top job, but agenda is broader",
                                link:"https://apnews.com/article/joe-biden-biden-cabinet-coronavirus-pandemic-hispanics-california-3f3fbd24de4a57f324397d0d5b438cc8"}}
                            article3={{
                                imageLink: "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/01800314-7226-49cc-9f8c-4752641509a6/3a6b9ce4-7ec2-4532-b319-8165b3d3a383/1280x720/match/931/524/image.jpg?ve=1&tl=1",
                                publisherIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/300px-Fox_News_Channel_logo.svg.png",
                                bias:"right bias",
                                title:"Biden's HHS pick Xavier Becerra faces tough questions over experience, COVID-19 on day 2",
                                link:"https://www.foxnews.com/politics/bidens-hhs-pick-xavier-becerra-testimony-day-two"}}
                                />
            </div>
            
        </div>
    )
}

export default Topics
