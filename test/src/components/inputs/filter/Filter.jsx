import './Filter.css'
import React from 'react';

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };
  return (
    <div className="category-dropdown">
      <select
        className="rounded"
        id="category"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
          <option disabled selected value="">
            Ordenar por
          </option>
          <option value="all">Relevancia</option>
          <option value="category1">Más reciente</option>
          <option value="category2">Precio: Menor a mayor</option>
          <option value="category3">Precio: Mayor a menor</option>
        </select>
      </div>
  );
};

export default Filter;
