import React, { Component } from "react";
import "./Generator.css";

class GeneratorComponent extends Component {
  render() {
    return (
      <div className="generator-container">
        <div id="generator-header">Results:</div>
        <pre
          id="lorem-container"
          dangerouslySetInnerHTML={{ __html: this.props.text }}
        ></pre>
      </div>
    );
  }
}

export default GeneratorComponent;
