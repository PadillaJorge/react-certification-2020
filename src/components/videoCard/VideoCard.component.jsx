import React from 'react'
import './VideoCard.styles.css'

const VideoCard = ({title, img}) => {
    return (
        <div className="card">
            <div style={{width:"100%", height:"150px", backgroundSize:"cover", backgroundImage:`url("${img}")`}}></div>
            <p>{title}</p>
        </div>
    )
}

export default VideoCard
