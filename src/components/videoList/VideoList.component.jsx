import React from 'react'
import VideoCard from '../videoCard/VideoCard.component'
import array from '../youtube-videos-mock.json'
import './VideoList.style.css'
const VideoList = () => {
    
    return (
        <div className="VideoList" >
            {array.items.map((el, i)=>{
                return(<VideoCard key={i} img={el.snippet.thumbnails.medium.url} title={el.snippet.title}/>)
            })}
        </div>
    )
}

export default VideoList
