import React, { Component } from 'react';
import Countdown from './countdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countdown target={new Date('Jan 1, 2020 00:00:00')}>
          {({days, hours, minutes, seconds}) => (
            <div>
              {days}
            </div>
          )}
        </Countdown>
      </div>
    );
  }
}

export default App;
