import React, { PureComponent } from 'react';
import dp from '../images/Sandeepsir.jpg'
class Lecturer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div className="jumbotron" id="profile">
                <div className="row" id="profile-container">
                    <div className="col-sm-4"> 
                        <div className="thumbnail" id="profile-dp">
                            <img src={dp} alt="Dr. Sandeep Verma N"></img>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="container-fluid" id="lecture-details">
                            <h2>Dr. SANDEEP VARMA N</h2><br></br>
                            <h4 htmlFor="">Assistant Professor</h4>
                            <h4 htmlFor="">Ph.D.</h4>
                            <p><strong> Research Interests:</strong> Data Engineering, Cloud Computing, Data Privacy </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Lecturer;


