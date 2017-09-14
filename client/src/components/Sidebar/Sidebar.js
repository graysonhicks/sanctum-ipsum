import React, { Component } from "react";
import "./Sidebar.css";

import ParagraphSelectComponent from "../ParagraphSelect/ParagraphSelect";
import SentenceSelectComponent from "../SentenceSelect/SentenceSelect";

class SidebarComponent extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<div id="sidebar-header">Choose Your Options: </div>
				<form action="">
					<ParagraphSelectComponent updateParagraphs={this.props.updateParagraphs} numParagraphs={this.props.numParagraphs} />
					<SentenceSelectComponent updateSentences={this.props.updateSentences} numSentences={this.props.numSentences} />
					{/* <Button id="copy-button" bsSize="large">Copy!</Button> */}
				</form>
			</div>
		);
	}
}

export default SidebarComponent;
