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
            
                    
                <div className="media">
  <img className="d-flex mr-3" src={imgUrl} alt={ videos.snippet.title } />
  <div className="media-body">
    <h6 className="mt-0">{ videos.snippet.title }</h6>
  </div>
</div>

            </li>
        );
    }

}