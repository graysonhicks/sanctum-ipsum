import React, { Component } from 'react';
import FaPeace from 'react-icons/lib/fa/hand-peace-o';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">SANCTUM IPSUM</span>

          <span className="sub-heading"><FaPeace className="header-logo" size={30}/> the holiest lorem ipsum generator on the web</span>
        </div>
    );
  }
}

export default HeaderComponent;
