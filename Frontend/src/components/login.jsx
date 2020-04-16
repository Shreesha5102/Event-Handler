import React from 'react';
import ReactDOM from 'react-dom';
import logo1 from '../images/logo1.jpg';
//import logosmall from '../images/logosmall.jpg';


class Login extends React.Component {

    onSignin() {
        return(
            <div><p>HELLO sign in Succesful</p></div>
        );
    }

    render() {
        const sayHello = () => {
            console.log("HElllloooo");
        }
        
        return (
            <div id="logincontainer" className = "container-fluid" >
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <div class="thumbnail">
                                    <img src={logo1} alt="Bmsce Logo"></img>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="container-fluid" id="form_container">
                                    <form id="loginform"> 
                                        <div id="form_heading">
                                            <h1>Welcome</h1>
                                            <h3>Enter your Crendentials</h3>
                                        </div>
                                        <div className= "input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa-2x" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" placeholder="example@bmsce.ac.in" onFocus="this.value = ''" pattern="^[a-z0-9](\.?[a-z0-9]){5,}@bmsce.ac.in$" required></input>
                                        </div>
                                        <br></br>
                                        <div className= "input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-2x" aria-hidden="true"></i></span>
                                            <input type="password" class="form-control" placeholder="Password" onFocus="this.value=''" required></input>
                                        </div>
                                        <br></br>
                                        <button type="submit" className="btn btn-danger" onClick={sayHello}>Log-In</button>
                                        <button className="g-signin2" dataonsuccess="onSignin"></button>

                                        
                                    </form>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="col-sm-2"></div> 
                </div>
                
            </div>
        );
    }
    
}

export default Login;