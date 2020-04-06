import React, { Component } from 'react';
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
        <Countdown target={new Date('Apr 20, 2020 00:00:00')}>
          {({days, hours, minutes, seconds, finished}) => finished ? (
            <Rest>Hora de mijar em tudo</Rest>
          ) : (
            <>
              <Rest>Faltam:</Rest>
              <Days> {days} dias </Days>
              <Time> {`${hours}:${minutes}:${seconds}`} </Time>
            </>
          )}
        </Countdown>
        <To> Para a Oferenda ser despachada </To>
        <ShareWrapper>
          <Share />
        </ShareWrapper>
      </BeerBackground>
    );
  }
}

export default App;
