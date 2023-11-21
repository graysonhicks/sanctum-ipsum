import React, { Component } from "react";
import "./Sidebar.css";

import ParagraphSelectComponent from "../ParagraphSelect/ParagraphSelect";
import SentenceSelectComponent from "../SentenceSelect/SentenceSelect";
import { Button } from "react-bootstrap";
import CopyComponent from "../CopyButton/CopyButton";

class SidebarComponent extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div id="sidebar-header">Choose Your Options: </div>
        <form action="">
          <ParagraphSelectComponent
            updateParagraphs={this.props.updateParagraphs}
            numParagraphs={this.props.numParagraphs}
          />
          <SentenceSelectComponent
            updateSentences={this.props.updateSentences}
            numSentences={this.props.numSentences}
          />
          <CopyComponent
            updateFormat={this.props.updateFormat}
            outputFormat={this.props.outputFormat}
            textToCopy={this.props.textToCopy}
          />
        </form>
      </div>
    );
  }
}

export default SidebarComponent;
