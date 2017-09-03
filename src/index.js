import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Env from '../.env';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import YTsearch from 'youtube-api-search';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTsearch({key: Env.API, term: 'skrillex'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    }); 
    
  }
  render() {
    return(
    <div>
      <SearchBar/>
      <VideoDetails 
        video={this.state.selectedVideo}
        />
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));