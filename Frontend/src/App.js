import React, { Component } from 'react';
//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//import components
import Data from './components/Form';
import Navmenu from './components/Navbar';
import User from './components/User'
import { Container } from 'react-bootstrap';
import Content from './components/Content'


class App extends Component {
    render() { 
        return ( 
            <Container fluid> 
                <Navmenu />
                <User />
                <Content/>
            </Container>
         );
    }
}
 
export default App;