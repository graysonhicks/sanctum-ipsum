import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class FooterComponent extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="sub-heading">Created by <a href="http://graysonhicks.com">Grayson Hicks</a></div>
          <div><a href="https://github.com/graysonhicks/sanctum-ipsum"><FontAwesome className="footer-logo" name='github' size="2x"/></a></div>
        </div>
    );
  }
}

export default FooterComponent;
