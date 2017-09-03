import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Env from '../.env';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };   
    
    this.videoSearch('webmobtech'); 
  }

  videoSearch = (term) => {
    YTsearch({key: Env.API, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    }); 
  }
  
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return(
    <div className="container">
      <div className="row">
      <SearchBar
        onSearchTermChange={videoSearch}
      />
      <VideoDetails 
        video={this.state.selectedVideo}
        />
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));