import React from 'react'
import { Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './MessageForm.css'

const MessageForm = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className='messages-output'> </div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <FormGroup>
                            <Form.Control type='text' placeholder='Your message'></Form.Control>
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: "orange" }}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default MessageForm
