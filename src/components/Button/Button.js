import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'

import './Button.css'

const classNameByType = {
  search: 'search',
  moiveBtn: 'movie-result-btn'
}

export const Button = ({ label, type, ...props}) => (
  <BootstrapButton className={classNameByType[type]} {...props}>
    { label }
  </BootstrapButton>
)
