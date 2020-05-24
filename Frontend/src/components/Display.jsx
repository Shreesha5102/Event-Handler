import React, { Component } from 'react';
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
            ids: [],
            show: false
         }

    }

    componentDidMount = () => {
        this.getEvents([]);
    }

    getEvents = (ids) => {
        fetch("http://localhost:4000/user/" + this.state.username)
        .then( res => res.json())
        .then(  data => {
            console.log("h");
            this.setState({
                ids: ids,
                events: data.events,
                folderId: data._id,
            });
            this.state.events.map((event) => {
                this.setState(prevState => ({
                    ids: [...prevState.ids, event._id]
                }))
            })
            console.log(this.state.ids)
            console.log(this.state.events)
        })
    }

    deleteEvent = (event,i) => {
        console.log("Deleting...");
        console.log(this.state.ids);
        fetch("http://localhost:4000/repo/" + this.state.folderId + "/" +  this.state.ids[i],{
            method: "DELETE"
        })
        .then(
            res => {
                console.log(res)
                if(res.status === 200){
                    var arr = [...this.state.ids];
                    arr.splice(i,1);
                    console.log(arr);
                    this.setState({ids: arr});
                    console.log(this.state.ids);
                    this.getEvents(this.state.ids);
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.events.map((event,i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{event.title}</td>
                                    <td>{event.venue}</td>
                                    <td>{event.date}</td>
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
                                            <Button variant="secondary" onClick={event => this.deleteEvent(event,i)}>
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
//        const UpdateData = new FormData();
//        UpdateData.append("title", this.state.title); 
//        UpdateData.append("venue", this.state.venue); 
//        UpdateData.append("date", this.state.date); 
//        UpdateData.append("certificate", this.state.certificate); 
//        console.log(UpdateData.entries());
//
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
                <p>
                    {this.state.title}<br></br>
                    {this.state.venue}<br></br>
                    {this.state.date}
                </p>
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