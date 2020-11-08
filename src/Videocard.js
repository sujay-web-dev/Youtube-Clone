import React from 'react'
import "./Videocard.css"
import Avatar from "@material-ui/core/Avatar"

function Videocard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videocard">
            <img src={image} alt="" className="videocard__image"/>
            <div className="videocard__info">
                <Avatar classNamae="videocard__avatar" alt={channel} src={channelImage}/>
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
