import React, { Component } from 'react';
import { Modal, Button, Col, Row, Form, InputGroup, FormControl, } from 'react-bootstrap';


class UpdModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: true,
            title: "",
            venue: "",
            date: "" ,
            certificate: []
         }
    }

    handlechange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    handleFileUpload = event => {
        let value = event.target.files[0];
        this.setState({
            certificate: value
        }, () =>{console.log(this.state.certificate)} );
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    render() { 
        return ( 
            <Modal 
                show={this.handleShow()} 
                onHide={this.handleClose()} 
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update this Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={event => this.postDetails(event)}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  placeholder="Ex: BMSCE hackathon"
                                  aria-describedby="basic-addon1"
                                  name="title"
                                  value={this.state.title}
                                  onChange={event => this.handlechange(event)}
                                  required  
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                  placeholder="Ex: BSN Hall"
                                  aria-describedby="basic-addon1"
                                  name="venue"
                                  value={this.state.venue}
                                  onChange={event => this.handlechange(event)}
                                  required
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text id="basic-addon1">Venue</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  type="date"
                                  placeholder="Date"
                                  aria-describedby="basic-addon1"
                                  value={this.state.date}
                                  name="date"
                                  onChange={event => this.handlechange(event)}
                                  required
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.File id="formcheck-api-custom" custom>
                              <Form.File.Input 
                                onChange={event => {this.handleFileUpload(event)}}
                              />
                              <Form.File.Label data-browse="Choose">
                                Select Certificate
                              </Form.File.Label>
                            </Form.File>
                        </Col>
                    </Row>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >Close</Button>
                    <Button variant="primary" >Update</Button>
                </Modal.Footer>
            </Modal>
         );
    }
}
 
export default UpdModal;