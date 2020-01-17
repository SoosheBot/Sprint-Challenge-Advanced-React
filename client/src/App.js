import React, { Component } from "react";
import "./App.css";

import "./App.css";
import axios from "axios";
import WCPlayer from "./components/WCPlayer";
import Darkmode from "./components/Darkmode";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      WCPlayerInfo: []
    };
    console.log("constructor is running");
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          WCPlayerInfo: res.data
        });
      })
      .catch(error => console.log("No player data returned.", error));
  }

  render() {
    return (
      <div className="App">
        <div data-testid="dark-mode__toggle">
          <div className="header">
            <h1>Women's World Cup Players</h1>
            <div className="darkmode">
              <Darkmode />
            </div>
          </div>
        </div>
        <div data-testid="wc-player-container">
          <div className="wc-players-list">
            <WCPlayer WCPlayerInfo={this.state.WCPlayerInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
