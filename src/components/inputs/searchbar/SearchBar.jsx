import './SearchBar.css'
import React from 'react';
import lupa from "../../../assets/img/bx-search-alt-2.svg"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="category-dropdown">
        <select id="category" defaultValue="">
          <option disabled value="">
            Categorías
          </option>
          <option value="all">Todas las categorías</option>
          <option value="category1">Adhesivos</option>
          <option value="category2">Pósters</option>
          <option value="category3">Tarjetas</option>
        </select>
      </div>
      <div className="search-input">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>
          <img src={lupa} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
