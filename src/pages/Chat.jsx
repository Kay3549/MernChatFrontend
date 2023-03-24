import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MessageForm from '../componemts/MessageForm';
import Sidebar from '../componemts/Sidebar';


function Chat() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar></Sidebar>
        </Col>
        <Col md={8}>
          <MessageForm></MessageForm>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat
