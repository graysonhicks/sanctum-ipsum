import React, { Component } from 'react';
import {FaGithub} from 'react-icons/fa';
import './Footer.css';

import SocialComponent from '../Social/Social';

class FooterComponent extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="sub-heading">Created by <a href="http://graysonhicks.com">Grayson Hicks</a></div>
          <div><a href="https://github.com/graysonhicks/sanctum-ipsum"><FaGithub className="footer-logo" size={30}/></a></div>
          <SocialComponent></SocialComponent>
        </div>
    );
  }
}

export default FooterComponent;
