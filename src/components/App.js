import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
      //this is using api
      axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 84141cf0034e44a3abfc5c3310b51b47075e9759d7e8a2f8a0bc26c39302d878'

        }
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
