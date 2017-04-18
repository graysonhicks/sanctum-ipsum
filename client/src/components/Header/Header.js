import React, { Component } from 'react';
import FaPeace from 'react-icons/lib/fa/hand-peace-o';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">SANCTUM IPSUM</span>
          <span className="header-logo-container"><FaPeace className="header-logo" size={30}/></span>
          <span className="sub-heading"> the holiest lorem ipsum generator on the web</span>
        </div>
    );
  }
}

export default HeaderComponent;
