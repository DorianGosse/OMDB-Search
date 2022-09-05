import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../Button'

import './MovieTile.css'

export const MovieTile = ({ movieObj }) => (
  <Container key={`${movieObj.imdbID}`} fluid className='movie-tile-container d-flex align-content-center align-items-center'>
    <Row className='pt-2'> <Col> <h5> {`${movieObj.Title} (${movieObj.Year})`} </h5> </Col> </Row>
    <Row className='pb-5 mb-5'> <Col> <img src={ movieObj.Poster } alt='no-available-poster'/> </Col> </Row>
    <Row className='movie-tile-btn-row'> <Col> <Button label='More' onClick={() => console.log('add movie more btn func')} /> </Col> </Row>
  </Container>
)