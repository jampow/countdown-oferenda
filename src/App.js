import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import Countdown from './Countdown'
import BeerBackground from './BeerBackground'
import Share from './Share'

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

const ShareWrapper = styled.div`
  padding: 5vh 0 5vh;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <BeerBackground>
        <Rest>Faltam:</Rest>
        <Countdown target={new Date('Jan 1, 2020 00:00:00')}>
          {({days, hours, minutes, seconds}) => (
            <Fragment>
              <Days> {days} dias </Days>
              <Time> {`${hours}:${minutes}:${seconds}`} </Time>
            </Fragment>
          )}
        </Countdown>
        <To> Para o próximo porre da Fabi </To>
        <ShareWrapper>
          <Share />
        </ShareWrapper>
      </BeerBackground>
    );
  }
}

export default App;
