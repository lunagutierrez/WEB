import React, { useState, useEffect } from 'react';
import './ProdQ.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import OptSel from '../../inputs/optSel/OptSel';

const cantidadOptions = [
  { value: 50, label: 50 },
  { value: 100, label: 100 },
  { value: 250, label: 250 },
  { value: 500, label: 500 },
];

const ProdQ = ({ costo }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(cantidadOptions[0].value);
  const [totalCost, setTotalCost] = useState(costo * cantidadOptions[0].value);

  useEffect(() => {
    setTotalCost(costo * selectedQuantity);
  }, [costo, selectedQuantity]);

  const handleQuantityChange = (selectedValue) => {
    setSelectedQuantity(selectedValue);
  };

  return (
    <div className="d-flex justify-content-center col mb-3 mt-4">
      <div className="qcosto px-4">
        <Form>
          <FormGroup className="dropdown">
            <OptSel
              label="Cantidad"
              options={cantidadOptions}
              onChange={handleQuantityChange}
            />
          </FormGroup>
        </Form>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="costo-container">
              <div className="costo d-flex justify-content-end">
                <div className="precio d-flex flex-column align-items-center">
                  <h4>Costo</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="costo-container">
              <div className="costo d-flex justify-content-start">
                <div className="precio d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-between">
                    <h4 className="text-pink">${totalCost}</h4>
                  </div>
                  <small>(${costo} cada uno)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdQ;
