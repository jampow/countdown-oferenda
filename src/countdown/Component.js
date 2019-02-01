import React from 'react'
import PropTypes from 'prop-types'

class Countdown extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  S = 1000
  M = this.S * 60
  H = this.M * 60
  D = this.H * 24

  componentWillMount = () => {
    this.timer = setInterval(this.updateCounter, 1000)
  }

  updateCounter = () => {
    const { S, M, H, D } = this
    const { target } = this.props

    const now = new Date().getTime()
    const dist = target.getTime() - now

    this.setState({
      days:    Math.floor(dist / D),
      hours:   Math.floor((dist % D) / H),
      minutes: Math.floor((dist % H) / M),
      seconds: Math.floor((dist % M) / S)
    })
  }

  render () {
    const { days, hours, minutes, seconds } = this.state
    return (
      <div>
        <div>{days} dias</div>
        <div>{hours} horas</div>
        <div>{minutes} minutos</div>
        <div>{seconds} segundos</div>
      </div>
    )
  }
}

Countdown.propTypes = {
  until: PropTypes.instanceOf(Date)
}

export default Countdown
