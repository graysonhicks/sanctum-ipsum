import React, { Component } from 'react';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">SANCTUM IPSUM</span>
          <span className="sub-heading">the holiest lorem ipsum generator on the web</span>
        </div>
    );
  }
}

export default HeaderComponent;
