import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './DenominationSelect.css';

class DenominationSelectComponent extends Component {
  render() {
    return (
        <FormGroup controlId="formControlsSelect">
         <ControlLabel>Select</ControlLabel>
         <FormControl componentClass="select" placeholder="select">
           <option value="select">select</option>
           <option value="other">...</option>
         </FormControl>
       </FormGroup>

    );
  }
}

export default DenominationSelectComponent;
