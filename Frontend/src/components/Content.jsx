import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Router} from 'react-router';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div id="Content">
                <Row>
                    <h2></h2>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                        <Button variant="dark" > 
                            <i class="fa fa-book" aria-hidden="true"></i><br></br>
                            Add Events
                        </Button>
                        <Button variant="dark">
                            <i class="fa fa-eye" aria-hidden="true"></i><br></br>
                            View Events
                        </Button>
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>
                    
                </Row>
            </div>
         );
    }
}
 
export default Content;