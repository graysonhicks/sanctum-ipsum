import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import './Footer.css';

class FooterComponent extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="sub-heading">Created by <a href="http://graysonhicks.com">Grayson Hicks</a></div>
          <div><a href="https://github.com/graysonhicks/sanctum-ipsum"><FaGithub className="footer-logo" size={30}/></a></div>
        </div>
    );
  }
}

export default FooterComponent;
