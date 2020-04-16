import React from 'react';

class Details extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <form action="#" method="POST">
                    <div class="row">
                        <div class="col-sm-1">
                        </div>
                        <div class="col-sm-3">
                            <label for="">Name of the {this.props.path}</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-list-alt"></i></span>
                                <input id="name" type="text" class="form-control" name="name" placeholder="Name" onfocus="this.value=''" required/>
                            </div>
                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-3">
                            <label for="">Venue</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
                                <input id="number" type="text" class="form-control" name="number" placeholder="location" onfocus="this.value=''"  required/>
                            </div>
                        </div>
                        <div class="col-sm-6"><p id="display"></p></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                        </div>
                        <div class="col-sm-3">
                            <label for="pickdate">Date</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input id="pickdate" type="date" name="pickdate" onfocus="this.value=''" required/>
                            </div>
                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-3">
                                <label for="pickdate">Time</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                                    <input id="dropdate" type="time"  name="dropdate" onfocus="this.value=''" required/>
                                </div>
                            </div>
                            <div class="col-sm-6"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1">
                            </div>
                            <div class="col-sm-3">
                                <label for="pickdate">Picture</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-camera"></i></span>
                                    <input id="pickdate" type="file" name="pickdate" onfocus="this.value=''" />
                                </div>
                                <p id="note"><label for="">Note:</label>this field is optional</p>
                            </div>
                            <div class="col-sm-2">
                            </div>
                            <div class="col-sm-3">

                                <label for="pickdate">Certificate</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-file"></i></span>
                                    <input id="dropdate" type="file"  name="dropdate" maxlength="100kb" onfocus="this.value=''" required/>
                                </div>
                            </div>
                            <div class="col-sm-6"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">

                            </div>
                            <div class="col-sm-6"></div>
                            <button type="submit" class="btn btn-warning btn-lg">Submit</button>
                        </div>
                </form> 
            </div>
        );
    } 
}  

export default Details;