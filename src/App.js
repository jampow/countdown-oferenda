import React, { Component } from 'react';
import Countdown from './Countdown'
import BeerBackground from './BeerBackground'

class App extends Component {
  render() {
    return (
      <BeerBackground>
        <Countdown target={new Date('Jan 1, 2020 00:00:00')}>
          {({days, hours, minutes, seconds}) => (
            <div>
              {days}
            </div>
          )}
        </Countdown>
      </BeerBackground>
    );
  }
}

export default App;
