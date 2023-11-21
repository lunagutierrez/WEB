import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './Plusminus.css';

const NumberInput = ({ value, onDecrease, onIncrease }) => {
  return (
    <div className="number-input">
      <Button color="danger" onClick={onDecrease} disabled={value <= 0}>
        -
      </Button>
      <span className="number">{value}</span>
      <Button color="success" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
};

const Plusminus = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <NumberInput value={count} onDecrease={handleDecrease} onIncrease={handleIncrease} />
    </div>
  );
};

export default Plusminus;
