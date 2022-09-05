import React,  { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { PageHeader } from '../../PageHeader/PageHeader'

import { getMoviesByName } from '../../../Utls/DataFetching'

import './Search.css'

const MovieSearch = ({}) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [movieResults, setMovieResults] = useState([])
  const [resultsPage, setResultsPage] = useState(1)
  const [showingAllResults, setShowingAllResults] = useState(true)

  const handleSearchTermChange = async (searchTerm) => {
    setSearchTerm(searchTerm)
    searchTerm.length > 1 && await getMoviesByName(searchTerm, 1).then(result => {
      setMovieResults(result.Search ? result.Search : [])
      result.Search.length === resultsPage * 10 ? setShowingAllResults(false) : setShowingAllResults(true)
    })
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
        setMovieResults([...movieResults, ...result.Search])
        result.Search.length === 10 ? setShowingAllResults(false) : setShowingAllResults(true)
      })
    }
  }

  console.log('movieResult', movieResults)
  console.log('showing all results', showingAllResults)
  
  return (
    <Container fluid>
      <Row className='pt-3 pb-3'> <PageHeader text='Search Movies' /> </Row>
      <Row>
        <Col> <Input placeholder='Seach movies by title' onChange={e => handleSearchTermChange(e.target.value)} value={searchTerm || ''}/> </Col>
        <Col className='text-start'> <Button label='clear' onClick={() => handleClearOnClick()} /> </Col>
      </Row>
      <Row> Movie results here</Row>
      <Row> <Col> <Button label='loadMore' onClick={() => handleLoadMoreClick()} disabled={showingAllResults}/> </Col> </Row>
    </Container>
  )
}

export default MovieSearch
