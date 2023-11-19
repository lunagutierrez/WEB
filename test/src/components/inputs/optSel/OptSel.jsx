import React, { useState } from 'react';
import './OptSel.css'

import { FormGroup, Label, Input } from 'reactstrap';

const OptSel = ({label, options}) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <FormGroup>
        <Label for="exampleSelect" className="labelSelect">
          <strong>{label}</strong>
        </Label>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" disabled>Escoge una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </FormGroup>
    </form>
  );
};

export default OptSel;
