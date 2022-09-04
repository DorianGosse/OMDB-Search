import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const PageHeader = ({ text }) => <Container fluid> <Row> <h1> { text } </h1> </Row> </Container>
