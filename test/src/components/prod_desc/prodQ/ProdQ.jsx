import React from 'react';
import './ProdQ.css'
import { FormGroup } from 'reactstrap';
import OptSel from '../../inputs/optSel/OptSel';

const cantidadOptions = [{ value: 'A', label: 50 },
                        { value: 'B', label: 100 },
                        { value: 'C', label: 250 },
                        { value: 'D', label: 500 },];

const ProdQ = ({id}) => {
  
    return (
      <div className="d-flex justify-content-center col mb-3 mt-4">
        <div className="qcosto px-4">
          <FormGroup className="dropdown">
            <OptSel label="Cantidad" options={cantidadOptions} id="Cantidad" />
          </FormGroup>
  
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
                      <h4 className="text-pink">$36,400</h4>
                    </div>
                    <small>($130 cada uno)</small>
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
