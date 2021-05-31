import React, { Component } from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Display from './Display';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const linkStyle = {
            color: 'black'
        }
        return ( 
            <Container id="Content">
                <Row>
                    <Col>
                        <h2>Welcome To Your Personal Space</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Display />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                        <Row>
                            <Col xs={12} md={12}>
                                <Link style={linkStyle} to="/add">
                                    <Button variant="light"> 
                                        <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i><br></br>
                                        Add Events
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>
                    
                </Row>

            </Container>
         );
    }
}
 
export default Content;