import React from 'react';

const VideoDetail = ({video}) => {

    if(!video) {
        return (<div>Lodaing...</div>);
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8 mx-auto">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h5>{video.snippet.title}</h5>
                <h5><small>{video.snippet.description}</small>  </h5>
            </div>
        </div>
    );
}

export default VideoDetail;