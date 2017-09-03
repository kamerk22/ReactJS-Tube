import React, {
    Component
} from 'react';

export default class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    videos = this.props.videos;
    render() {
        return ( 
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object"/>
                    </div>
                </div>
            </li>
        );
    }

}