import React, { Component } from 'react';
import {LiaHandPeaceSolid} from 'react-icons/lia';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">SANCTUM IPSUM</span>
          <span className="header-logo-container"><LiaHandPeaceSolid className="header-logo" size={30}/></span>
          <span className="sub-heading"> the holiest lorem ipsum generator on the web</span>
        </div>
    );
  }
}

export default HeaderComponent;
