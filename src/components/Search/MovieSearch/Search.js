import React,  { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { PageHeader } from '../../PageHeader/PageHeader'

import './Search.css'

const MovieSearch = ({}) => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (value) => {
    setSearchTerm(value)
  }

  const handleClearOnClick = () => setSearchTerm('')

  return (
    <Container fluid>
      <Row className='pt-3 pb-3'> <PageHeader text='Search Movies' /> </Row>
      <Row>
        <Col> <Input placeholder='Seach movies by title' onChange={e => handleSearchTermChange(e.target.value)} value={searchTerm || ''}/> </Col>
        <Col className='text-start'> <Button label='clear' onClick={() => handleClearOnClick()} /> </Col>
      </Row>
      
    </Container>
  )
}

export default MovieSearch
