import React, { Component } from 'react';
import './App.css';

import './App.css';
import axios from 'axios';
import WCPlayer from './components/WCPlayer';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      WCPlayerInfo: []
    };
    console.log('constructor is running')  
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        wcPlayerInfo: res.data
      })
    })
    .catch(error => console.log('No player data returned.', error));
  }

  render() {
    return(
      <div className='App'>

      </div>
    )
  }


};

export default App;
