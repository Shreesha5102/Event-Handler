import React from 'react';
import {Link} from 'react-router-dom';

class Colmenu extends React.Component {
    render() { 
        return ( 
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">ADD</a>
                    </h4>
                  </div>
                  <div id="collapse1" class="panel-collapse collapse in">
                    <Link to="/event"><div class="panel-body"> ADD EVENT</div></Link>
                    <Link to="/seminar"><div class="panel-body"> ADD SEMINAR</div></Link>
                    <Link to="/workshop"><div class="panel-body"> ADD WORKSHOP</div></Link>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">UPDATE</a>
                    </h4>
                  </div>
                  <div id="collapse2" class="panel-collapse collapse">
                    <Link to="/details"><div class="panel-body"> UPDATE EVENT</div></Link>
                    <Link to="/details"><div class="panel-body"> UPDATE SEMINAR</div></Link>
                    <Link to="/details"><div class="panel-body"> UPDATE WORKSHOP</div></Link>
                  </div>
                </div> 
            </div>
        );
    }
}
 
export default Colmenu;