import React, { Component } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import './ParagraphSelect.css';

class ParagraphSelectComponent extends Component {
  render() {
    return (
        <div className="paragraph-select-container">
            <FormGroup controlId="formControlsSelect">
             <FormLabel>Number of Paragraphs</FormLabel>
             <FormSelect placeholder="select" value={this.props.numParagraphs}  onChange={this.props.updateParagraphs}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
             </FormSelect>
            </FormGroup>
        </div>

    );
  }
}

export default ParagraphSelectComponent;
