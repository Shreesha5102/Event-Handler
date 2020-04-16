import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  render() {
    return (
      <footer id="contact" className="fixed-bottom text-center">
          <h2>ABOUT US</h2>
          <div class="row ">
            <div class="col-sm-12">
              <h4></h4>
              <p><span class="glyphicon glyphicon-map-marker"></span>BMS College Of Engineering</p>
              <p><span class="glyphicon glyphicon-phone"></span> +91 6362458730</p>
              <p><span class="glyphicon glyphicon-phone"></span> +91 9686867091</p>
              <p><span class="glyphicon glyphicon-envelope"></span> shreeshabhat.is18@bmsce.ac.in</p>
              <p><span class="glyphicon glyphicon-envelope"></span> swaroop.is18@bmsce.ac.in</p>
            </div>
          </div>
      </footer>
  );
  }
}

export default Contact;