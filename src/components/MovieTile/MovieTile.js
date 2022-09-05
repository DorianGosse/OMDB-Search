import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../Button'

import './MovieTile.css'

export const MovieTile = ({ movieObj }) => (
  <Container className='movie-tile-container mb-5'>
    <Row> <Col> <h5> {`${movieObj.Title} (${movieObj.Year})`} </h5> </Col> </Row>
    <Row> <Col> <img src={ movieObj.Poster } alt='no-available-poster'/> </Col> </Row>
    <Row> <Col> <Button label='More' onClick={() => console.log('add movie more btn func')} /> </Col> </Row>
  </Container>
)