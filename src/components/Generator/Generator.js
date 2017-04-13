import React, { Component } from 'react';
import './Generator.css';

class GeneratorComponent extends Component {
  render() {
    return (
        <div className="generator-container">
            <div id="generator-header">Results:</div>
            <div id="lorem-container" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
        </div>
    );
  }
}

export default GeneratorComponent;
