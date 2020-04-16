import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Contact from './components/contact';
import './App.css';
import Lecturer from './components/lecturerdetails';
import Imagechange from './components/changeimage';
import Navbar from './components/navbar';
import Details from './components/details';
import Colmenu from './components/Col_menu';
import Test from './components/newsfeed';

class App extends React.Component {
  
  render() { 
    return ( 
      <Router>
        <div className="App">
          <Navbar />
          <Lecturer />
          <Switch>
            <Route path="/" exact component={Colmenu}/>
            <Route path="/seminar" exact component={(props) => <Details {...props} path={"Seminar"}/>}/>
            <Route path="/workshop" exact component={(props) => <Details {...props} path={"Workshop"}/>}/>
            <Route path="/event" exact component={(props) => <Details {...props} path={"Event"}/>}/>
          </Switch>
          <Contact />
        </div>
    </Router>
     );
  }
}
 
export default App;

