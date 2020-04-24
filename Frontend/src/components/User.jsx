import React, { Component } from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import Face from '../images/Sandeepsir.jpg';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            __id: "",
            emp_id: "", 
            username: "Dr. Sandeep Verma N",
            designation: "",
            date_of_joining: "",
            course: ""
         }
    }

    componentDidMount(){
        this.getUserdetails();
    }

    getUserdetails = () => {
        console.log("Getting User Details...");
        const url = this.state.username;
        console.log(url);
        fetch("http://localhost:4000/user/" + url)
        .then( res => res.json())
         .then( (data) => {
             console.log(data);
             let date = new Date(data.date_of_joining);
             date = date.toDateString();
             this.setState({
                 __id: data.__id,
                 emp_id: data.emp_id,
                 username: data.username,
                 designation: data.designation,
                 date_of_joining: date,
                 course: data.course
             });
         })
    }
    render() { 
        return ( 
            <Container fluid id="user">
                <Row id="user-info">
                    <Col xs={6} md={6}>
                        <Image src={Face} roundedCircle />
                    </Col>
                    <Col xs={6} md={6}>
                        <br></br>  
                        <h2>{this.state.username} </h2>
                        <h4>{this.state.designation} </h4>
                        <h4>{this.state.emp_id} </h4>
                        <h4>{this.state.date_of_joining} </h4>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default User;