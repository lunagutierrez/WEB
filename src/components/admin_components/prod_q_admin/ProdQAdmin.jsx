import React from 'react';
import './ProdQAdmin.css'
import { FormGroup } from 'reactstrap';
import OptSel from '../../inputs/optSel/OptSel';

const ProdQAdmin = () => {
  
    return (
      <div className="d-flex justify-content-center col mb-3 mt-4">
        <div className="qcosto px-4">  
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="costo-container">
                <div className="costo d-flex justify-content-end">
                  <div className="precio d-flex flex-column align-items-center">
                    <h5>Costo por unidad: </h5>
                    <input type="text"/>
                    <h5>Maximo de unidades: </h5>
                    <input type="number"/>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-md-6">
              <div className="costo-container">
                <div className="costo d-flex justify-content-start">
                  <div className="precio d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-between">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProdQAdmin;
