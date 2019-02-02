import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

const Button = ({ className, text, url }) => {
  return (
    <a className={className} href={`tg://msg?text=${text}`}>
      <FontAwesomeIcon icon={faTelegram} />
    </a>
  )
}

export default styled(Button)`
  color: #5682a3;
`
