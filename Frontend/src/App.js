import React, { Component } from 'react';
//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//import components
import Data from './components/Form';
import Navmenu from './components/Navbar';
import User from './components/User'
import Content from './components/Content'
import Contact from './components/Contact';
import Display from './components/Display';
import UpdModal from './components/UpdateModal';


class App extends Component {
    render() { 
        return ( 
            <Router>
                <Container fluid> 
                    <Navmenu />
                    <User />
                    <Switch>
                        <Route path="/" exact component={ Content } />
                        <Route path="/add" exact component= { Data }/>
                        <Route path="/view" exact component= { Display }/>
                        <Route path="/update" exact render= { UpdModal }/>
                    </Switch>
                    <Contact/>
                </Container>
            </Router>
         );
    }
}
 
export default App;