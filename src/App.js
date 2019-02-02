import React, { Component, Fragment } from 'react';
import Countdown from './Countdown'
import BeerBackground from './BeerBackground'
import styled from 'styled-components'

const Rest = styled.div`
  padding: 20vh 0 5vh;
  font-size: 30px;
  text-align: center;
`

const Days = styled.div`
  font-size: 26px;
  text-align: center;
`

const Time = styled.div`
  font-size: 26px;
  text-align: center;
`

const To = styled.div`
  padding: 5vh 0 5vh;
  font-size: 26px;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <BeerBackground>
        <Countdown target={new Date('Jan 1, 2020 00:00:00')}>
          {({days, hours, minutes, seconds}) => (
            <Fragment>
              <Rest>Faltam:</Rest>
              <Days> {days} dias </Days>
              <Time> {`${hours}:${minutes}:${seconds}`} </Time>
              <To> Para o próximo porre da Fabi </To>
            </Fragment>
          )}
        </Countdown>
      </BeerBackground>
    );
  }
}

export default App;
