import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Crumbs from '../../components/crumbs/Crumbs';
import Filter from '../../components/inputs/filter/Filter';
import SearchBar from '../../components/inputs/searchbar/SearchBar';
import Product from '../../components/products/product/Product';
import './Store.css';

const paths = [
  { name: 'Inicio', link: '/printlab/landing' },
  { name: 'Tienda', link: '/printlab/store' },
];

const products = [
  {
    image: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
    name: 'Sticker 1',
    price: 1000,
    redirect: '/printlab/store/prod/1',
  },
  {
    image: 'https://staticecp.uprinting.com/9876/700x700/sticker-clear.webp',
    name: 'Sticker 2',
    price: 2000,
    redirect: '/printlab/store/prod/2',
  },
  {
    image: 'https://staticecp.uprinting.com/6808/700x700/UP_Sheet_Sticker_PDP_Image_D.jpg',
    name: 'Sticker 3',
    price: 3000,
    redirect: '/printlab/store/prod/3',
  },
  {
    image: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
    name: 'Sticker 4',
    price: 5000,
    redirect: '/printlab/store/prod/1',
  },
  {
    image: 'https://staticecp.uprinting.com/9876/700x700/sticker-clear.webp',
    name: 'Sticker 5',
    price: 8000,
    redirect: '/printlab/store/prod/2',
  },
  {
    image: 'https://staticecp.uprinting.com/6808/700x700/UP_Sheet_Sticker_PDP_Image_D.jpg',
    name: 'Sticker 6',
    price: 3000,
    redirect: '/printlab/store/prod/3',
  },
];

const Store = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const filterProducts = () => {
    switch (selectedFilter) {
      case 'all':
        return products;
      case 'category1':
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'category2':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'category3':
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts();

  return (
    <>
      <Crumbs paths={paths} />
      <div className="d-flex justify-content-between mx-5 px-5">
        <SearchBar />
        <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </div>
      <div className="d-flex justify-content-center">
        <div className="product-container mx-5 px-5">
          {filteredProducts.map((product, index) => (
            <Product
              key={product.redirect}
              image={product.image}
              name={product.name}
              price={product.price}
              redirect={product.redirect}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
