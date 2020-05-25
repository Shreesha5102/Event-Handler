import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container fluid id="contact">
                <Row>
                    <h2>About</h2>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        shreeshabhat.is18@bmsce.ac.in
                    </Col>
                    <Col xs={6} md={6}>
                        swaroopkumar.is18@bmsce.ac.in
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Contact;