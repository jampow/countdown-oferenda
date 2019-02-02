import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Button = ({ className, text, url }) => {
  return (
    <a className={className} href={`whatsapp://send?text=${text} ${url}`}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  )
}

export default styled(Button)`
  color: #009688;
`
