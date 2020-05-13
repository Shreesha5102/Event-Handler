import React, { Component } from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router';
import { Link } from 'react-router-dom';
import Data from './Form';

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
                    <h2></h2>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                        <Row>
                            <Col xs={6} md={6}>
                                <Link style={linkStyle} to="/add">
                                    <Button variant="light"> 
                                        <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i><br></br>
                                        Add Events
                                    </Button>
                                </Link>
                            </Col>
                            <Col xs={6} md={6}>
                                <Link style={linkStyle} to="/view">
                                    <Button variant="light"> 
                                        <i class="fa fa-eye fa-2x" aria-hidden="true"></i><br></br>
                                        View Events
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