import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './OptSel.css';

const OptSel = ({ label, options, value, onChange }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect" className="labelSelect">
          <strong>{label}</strong>
        </Label>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          value={value} // Use the value prop here
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Escoge una opción
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </FormGroup>
    </Form>
  );
};

export default OptSel;
