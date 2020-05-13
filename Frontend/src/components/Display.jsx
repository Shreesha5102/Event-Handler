import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "Dr. Sandeep Verma N",
            events: []
         }

    }

    componentDidMount = () => {
        this.getEvents();
    }

    getEvents = () => {
        fetch("http://localhost:4000/user/" + this.state.username)
        .then( res => res.json())
        .then(  data => {
            this.setState({
                events: data.events
            });
        })
    }

    render() { 
        const space = "    ";
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
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
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
 
export default Display;