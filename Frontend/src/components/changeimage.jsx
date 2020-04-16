import React from 'react';
import  image from '../images/logosmall.jpg'
import ReactDOM from 'react-dom';



class Imagechange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Shreesha"
        };    
    }

    changeName = () => {
        this.setstate({
            name: "Swaroop"
        });
    }

    render() {
        return(
            <div>
                <p>Hi im {this.state.name} </p>
                <button onClick={this.changename}>Change Name</button>
            </div>
        );
    }
}

export default Imagechange;