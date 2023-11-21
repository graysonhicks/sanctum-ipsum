import React, { Component } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import './SentenceSelect.css';

class SentenceSelectComponent extends Component {
  render() {
    return (
        <div className="sentence-select-container">
            <FormGroup controlId="formControlsSelect">
             <FormLabel>Number of Sentences per Paragraph</FormLabel>
             <FormSelect value={this.props.numSentences} onChange={this.props.updateSentences}>
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

export default SentenceSelectComponent;
