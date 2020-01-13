import React, {Component} from 'react';
import './App.css';
import Box from './Component/Box'


class App extends Component {
  render(){
    return (
      <div>
        <h1>Tic-tac-toe Game</h1>
              <Box/>
      </div>
    );
  }
}

export default App;
