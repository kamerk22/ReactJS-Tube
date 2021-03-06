import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((videos) => {
        return <VideoListItem key={videos.etag} videos={videos} onVideoSelect={props.onVideoSelect} />    
    });
    return (
        <ul className="col-md-4 list-group mx-auto">
            {videoItems}
        </ul>
    )
}

export default VideoList;