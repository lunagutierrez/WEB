// Plusminus.js

import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './Plusminus.css';

const NumberInput = ({ value, onDecrease, onIncrease }) => {
  return (
    <div className="number-input">
      <Button color="danger" onClick={onDecrease} disabled={value <= 1}>
        -
      </Button>
      <span className="number">{value}</span>
      <Button color="success" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
};

const Plusminus = ({ handleRemove, setCount }) => {
  const [count, setCountInternal] = useState(1);

  useEffect(() => {
    // Update the parent's count when count changes
    setCount && setCount(count);
  }, [count, setCount]);

  const handleDecrease = () => {
    if (count > 1) {
      setCountInternal(count - 1);
    } else if (handleRemove) {
      handleRemove(); // Remove the product when count reaches 0
    }
  };

  const handleIncrease = () => {
    setCountInternal(count + 1);
  };

  return (
    <div>
      <NumberInput value={count} onDecrease={handleDecrease} onIncrease={handleIncrease} />
    </div>
  );
};

export default Plusminus;
