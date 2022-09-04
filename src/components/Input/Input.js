import React from 'react'
import { FormControl } from 'react-bootstrap'

import './Input.css'

const classNameByType = {
  search: 'movie-search'
}

export const Input = ({ type, ...props }) => (
  <FormControl className={classNameByType[type]} {...props} />
)