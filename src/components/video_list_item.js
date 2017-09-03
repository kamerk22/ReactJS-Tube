import React, {
    Component
} from 'react';

export default class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const videos = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;
    
        const imgUrl = videos.snippet.thumbnails.default.url;
        return ( 
            <li className="list-group-item" onClick={() => onVideoSelect(videos)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl}/>
                    </div>

                    <div className="media-body">
                    <div className="media-heading">
                        { videos.snippet.title }
                    </div>
                </div>  
                </div>

            </li>
        );
    }

}