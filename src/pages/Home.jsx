import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

function Home() {
  return (
    <Row>
      <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
        <div>
          <h1>Share the world with your friends</h1>
          <p>Chat App let you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <FontAwesomeIcon icon={faComments} />
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className='home__bg'>
      </Col>
    </Row>
  )
}

export default Home
