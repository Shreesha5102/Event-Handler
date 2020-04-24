import React, { Component } from 'react';
import {Form, Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap';


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            venue: "",
            date: "" ,
            certificate: []
         }
    }

    componentDidMount() {
        this.getDetails();
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

    getDetails = () => {
        console.log("from DB..");
        fetch("http://localhost:4000/repo/")
        .then( res => res.json())
         .then( (data) => {
             console.log(data);
             this.setState({
                title: data[0].title
             });
         },
         (error) => {
             console.log(error);
         })
    }

    postDetails = (event) => {
        event.preventDefault();
        console.log("Posting...");
        const postData = new FormData();
        postData.append("title", this.state.title); 
        postData.append("venue", this.state.venue); 
        postData.append("date", this.state.date); 
        postData.append("certificate", this.state.certificate); 

        fetch("http://localhost:4000/repo/", {
            method: 'POST',
            body: postData
        } )
        .then(res => res.json())
         .then( (data) => {
             console.log(data);
             this.setState({
                 title: data.title,
                 venue: data.venue,
                 date: data.date,
                 certificate: data.certficate
             })
         },
         (error) =>{
             console.log(error);
         })
    
    }

    render() { 
       
        return ( 
            <div>
                <Form onSubmit={event => this.postDetails(event)}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  placeholder="Title"
                                  aria-describedby="basic-addon1"
                                  name="title"
                                  onChange={event => this.handlechange(event)}
                                  required  
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                  placeholder="Venue"
                                  aria-describedby="basic-addon1"
                                  name="venue"
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
                                  name="date"
                                  onChange={event => this.handlechange(event)}
                                  required
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.File id="formcheck-api-custom" custom>
                              <Form.File.Input onChange={event => {this.handleFileUpload(event)}}/>
                              <Form.File.Label data-browse="Choose">
                                Select Certificate Image
                              </Form.File.Label>
                            </Form.File>
                        </Col>
                    </Row>
                    <Row>
                        <Button type="Submit">Submit</Button>
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