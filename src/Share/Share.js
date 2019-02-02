import React, { Fragment } from 'react'
import styled from 'styled-components'
import WhatsappButton from './WhatsappButton'
import TelegramButton from './TelegramButton'

const Share = ({ className }) => {
  const url = window.location.href
  const msg = `Calma, 2020 já está chegando... ${url}`

  return (
    <Fragment>
      <WhatsappButton className={className} url={url} text={msg} />
      <TelegramButton className={className} url={url} text={msg} />
    </Fragment>
  )
}

export default styled(Share)`
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 5px;
  text-align: center;
  font-size: 30px;
  margin: 5px;

`
