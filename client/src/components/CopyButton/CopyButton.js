import React, { Component } from "react";
import "./CopyButton.css";
import { Button, Form, FormCheck } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

class CopyComponent extends Component {
  constructor(props) {
    super(props);
    this.copyTooltipRef = React.createRef();
    this.state = {
      showTooltip: false,
      checkboxHTML: true,
      checkboxPlaintext: false,
    };
  }

  switchTooltipState = () => {
    this.setState((prevState) => ({
      showTooltip: !prevState.showTooltip,
    }));
  };

  switchCheckbox() {
    if (this.state.checkboxHTML) {
      this.props.updateFormat("Plain text");
    } else {
      this.props.updateFormat("HTML");
    }
    this.setState((prevState) => ({
      checkboxHTML: !prevState.checkboxHTML,
      checkboxPlaintext: !prevState.checkboxPlaintext,
    }));
  }

  render() {
    return (
      <div className="copy-container">
        <FormCheck
          onChange={() => this.switchCheckbox()}
          checked={this.state.checkboxHTML}
          inline
          type="checkbox"
          label="HTML"
        />
        <FormCheck
          onChange={() => this.switchCheckbox()}
          checked={this.state.checkboxPlaintext}
          inline
          type="checkbox"
          label="Plain text"
        />
        <br />
        <Button
          onClick={() => {
            navigator.clipboard.writeText(this.props.textToCopy);
            this.setState({ showTooltip: true });
          }}
          id="copy-button"
          bsSize="large"
        >
          Copy
        </Button>
        <CSSTransition
          in={this.state.showTooltip}
          timeout={1500}
          classNames="copy-tooltip-transition"
          onEntered={this.switchTooltipState}
        >
          <span ref={this.copyTooltipRef} id="copy-tooltip">
            Done!
          </span>
        </CSSTransition>
      </div>
    );
  }
}

export default CopyComponent;
