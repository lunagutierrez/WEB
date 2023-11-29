import './InputBox.css'
import React from 'react';

const InputBox = ({input_id,input_type,label_text}) => {
    return (
                <div className="form-input">
                    <div className='label-input'>
                        <label for ={input_id}>{label_text}</label>
                    </div>
                    <input 
                    id={input_id} 
                    type={input_type} 
                    name={input_id} 
                    />
                </div>
    );
  };
  
  export default InputBox;