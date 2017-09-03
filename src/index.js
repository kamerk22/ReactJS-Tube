import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Env from '../.env';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTsearch from 'youtube-api-search';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTsearch({key: Env.API, term: 'skrillex'}, (videos) => {
      this.setState({ videos });
    }); 
    
  }
  render() {
    return(
    <div>
      <SearchBar/>
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));