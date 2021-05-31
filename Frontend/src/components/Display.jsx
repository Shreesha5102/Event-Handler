import React, { Component } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Modal, Col, Row, Form, InputGroup, FormControl, ButtonToolbar} from 'react-bootstrap';


class Display extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            username: "Dr. Sandeep Verma N",
            events: [],
            folderId: "",
            eventId: "",
            show: false
         }

    }

    componentDidMount = () => {
        this.getEvents([]);
    }

    getEvents = () => {
        fetch("http://localhost:4000/user/" + this.state.username)
        .then( res => res.json())
        .then(  data => {
            console.log({data});
            this.setState({
                events: data.events,
                folderId: data._id,
            });
        })
    }

    downloadFile = async (id, path, mimetype) => {
        try {
          const result = await axios.get(`http://localhost:4000/repo/download/${this.state.username}/${id}`, {
            responseType: 'blob'
          });
          const split = path.split('/');
          const filename = split[split.length - 1];
          const mimetype1 = mimetype.split('/');
          const mimetype2 = mimetype1[mimetype1.length-1];
          return download(result.data, filename, mimetype2);
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log('Error while downloading file. Try again later');
          }
        }
      };

    deleteEvent = (event,id) => {
        console.log("Deleting...");
        console.log(id);
        fetch("http://localhost:4000/repo/" + this.state.folderId + "/" + id,{
            method: "DELETE"
        })
        .then(
            res => {
                console.log(res)
                if(res.status === 200){
                    this.getEvents();
                }
        }
        )
    }

     

    render() { 
        let modalClose = () => this.setState({ show: false });
        return ( 
            <Container fluid>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Venue</th>
                            <th>Date</th>
                            <th>Certficate</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.events.map((event,i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{event.title}</td>
                                    <td>{event.venue}</td>
                                    <td>{event.date.slice(0,10)}</td>
                                    <td><a href="#/" onClick={()=> this.downloadFile(event._id, event.certificate,event.certficiate_mimetype)}>
                                            Download Certificate
                                        </a>
                                    </td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                                variant="secondary" 
                                                onClick={
                                                    () => {
                                                        console.log("clicked");
                                                        this.setState({
                                                            show: true,
                                                            eventId:event._id});
                                                        }
                                                }
                                            >
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </Button>
                                            {this.state.show ?
                                                (
                                                    <MyVerticallyCenteredModal
                                                    show={this.state.show}
                                                    onHide={modalClose}
                                                    events={this.state.events}
                                                    eventid={this.state.eventId}
                                                    folderid={this.state.folderId}
                                                  />  
                                                ):
                                                (
                                                    <span></span>
                                                )
                                            }
                                            <Button variant="secondary" onClick={eve => this.deleteEvent(eve,event._id)}>
                                                <i className="fa fa-trash" aria-hidden="true" ></i>
                                            </Button>  
                                        </ButtonToolbar>  
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
         );
    }
}

class MyVerticallyCenteredModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: this.props.events,
            title: "",
            venue: "",
            date: "",
            certificate: [],
            eventId: this.props.eventid,
            folderId: this.props.folderid
        }
    }

    componentDidMount() {
        console.log("hi");
        this.getEvent();
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
    
    getEvent = () => {
        console.log("getting event");
        var i = 0;
        var events = this.state.events;
        for(i=0;i<events.length;i++){
            
            if(events[i]._id === this.state.eventId){
                console.log(events[i]._id);
                this.setState({
                    title: events[i].title,
                    venue: events[i].venue,
                    date: events[i].date.slice(0,10),
                    certificate: events[i].certificate
                });
            }
        }
    }

    updateEvent = (event) => {
        event.preventDefault();
       console.log("Updating...");
        fetch("http://localhost:4000/repo/" + this.state.folderId + "/" +  this.state.eventId, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": this.state.title,
                "venue": this.state.venue,
                "date": this.state.date,
                "certificate": this.state.certificate
            })
        } )
        .then(res => res.json())
         .then( (data) => {
             console.log(data);
             if(data.nModified === 1 && data.ok === 1){
                 this.props.onHide();
                 window.location.reload(false);
             }
         },
         (error) =>{
             console.log(error);
         })
   }


	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Update Post
                    </Modal.Title>
				</Modal.Header>
                <Form onSubmit={event => this.updateEvent(event)}>
				<Modal.Body>
                    
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
                        <div>
            </div>
				</Modal.Body>
				<Modal.Footer>
                    <Button variant="primary" type="submit">Update</Button>
				</Modal.Footer>
                </Form>
			</Modal>
		);
	}
}

 
export default Display;