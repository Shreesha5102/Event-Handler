import React, { Component } from 'react';
import {Form, Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            venue: "",
            date: "" ,
            username: "Dr. Sandeep Verma N",
            certificate: [],
         }
    }

    componentDidMount() {
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
        document.getElementById("alert").innerHTML = value.name + " Selected"
        document.getElementById("alert").style.display = "block"
        this.setState({
            certificate: value
        }, () =>{console.log(this.state.certificate)} );
    }

    postDetails = (event) => {
        event.preventDefault();
        console.log("Posting...");
        const postData = new FormData();
        postData.append("title", this.state.title); 
        postData.append("venue", this.state.venue); 
        postData.append("date", this.state.date); 
        postData.append("certificate", this.state.certificate); 

        fetch("http://localhost:4000/repo/" + this.state.username, {
            method: 'POST',
            body: postData
        } )
        .then(res => res.json())
         .then( (data) => {
            console.log(data);
            if(data.length > 0){
                console.log(this.state);
                window.location.reload(false);
            }
         },
         (error) =>{
             console.log(error);
         })
    
    }

    render() {
        return ( 
            <div id="form">
                <Row>
                    <h3>Enter the Details</h3>
                </Row>
                <Form onSubmit={event => this.postDetails(event)} autoComplete="off">
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
                            <p id="alert" style={{display: "none"}}></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="Submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            <div>
                <p>
                    {this.state.title}<br></br>
                    {this.state.venue}<br></br>
                    {this.state.date}
                </p>
            </div>
            </div>

         );
    }
}
 
export default Data