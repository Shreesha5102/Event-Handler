import React, { Component } from 'react';
//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//import components
import Data from './components/Form';
import Navmenu from './components/Navbar';
import User from './components/User'
import { Container } from 'react-bootstrap';

class App extends Component {
    render() { 
        return ( 
            <Container fluid> 
                <Data />
            </Container>
         );
    }
}
 
export default App;