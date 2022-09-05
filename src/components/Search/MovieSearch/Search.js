import React,  { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { PageHeader } from '../../PageHeader/PageHeader'
import { MovieTile } from '../../MovieTile'
import Spinner from 'react-bootstrap/esm/Spinner'

import { getMoviesByName } from '../../../Utls/DataFetching'

import './Search.css'

const MovieSearch = ({}) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [movieResults, setMovieResults] = useState([])
  const [resultsPage, setResultsPage] = useState(1)
  const [showingAllResults, setShowingAllResults] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSearchTermChange = async (searchTerm) => {
    setSearchTerm(searchTerm)
    searchTerm.length > 1 && setLoading(true)
    searchTerm.length > 1 && await getMoviesByName(searchTerm, 1).then(result => {
      if (typeof result.Search === 'undefined') return
      setMovieResults(result.Search ? result.Search : [])
      result.Search.length === resultsPage * 10 ? setShowingAllResults(false) : setShowingAllResults(true)
    })
    setLoading(false)
  }

  const handleClearOnClick = () => {
    setSearchTerm('')
    setMovieResults([])
    setShowingAllResults(true)
  }

  const handleLoadMoreClick = async () => {
    setResultsPage(resultsPage + 1)
    if (movieResults.length === resultsPage * 10) {
      await getMoviesByName(searchTerm, resultsPage + 1).then(result => {
        if (typeof result.Search === 'undefined') return
        setMovieResults([...movieResults, ...result.Search])
        result.Search.length === 10 ? setShowingAllResults(false) : setShowingAllResults(true)
      })
    }
  }

  const createSearchBox = () => (
    <>
      <Row className='justify-content-center'>
        <Col lg={3} md={6} className='d-flex'>
          <Input placeholder='Seach movies by title' onChange={e => handleSearchTermChange(e.target.value)} value={searchTerm || ''}/>
          <Button label='clear' type='search' onClick={() => handleClearOnClick()} />
        </Col>
      </Row>
      <Row className='pb-4'> <Col className='text-start'> {searchTerm.length && movieResults.length === 0 ? 'No Results' : null} </Col> </Row>
    </>
  )

  const createResultDisplay = () => (
    <Row className='results-row p-0'>
      {movieResults.length && !loading ? movieResults.map(mov => (
        <Col className='p-3 result-col' lg={3} mb={4} sm={4}> <MovieTile movieObj={mov} /> </Col>
      )) : null}
    </Row>
  )

  const createLoadMoreBtn = () => (
    <>
      {
        showingAllResults
          ? null
          : <Row className='pb-3'> <Col> <Button label='Load More' onClick={() => handleLoadMoreClick()} disabled={showingAllResults}/> </Col> </Row>
      }
    </>
  )

  console.log('movieResults', movieResults)

  return (
    <Container fluid>
      <Row className='pt-3 pb-3'> <PageHeader text='Search Movies' /> </Row>
      { createSearchBox() }
      { loading ? <Row className='p-5'> <Col> <Spinner animation="border" variant='primary'> </Spinner> </Col> </Row> : null}
      { searchTerm.length > 1 ? createResultDisplay() : null }
      { createLoadMoreBtn() }
    </Container>
  )
}

export default MovieSearch
