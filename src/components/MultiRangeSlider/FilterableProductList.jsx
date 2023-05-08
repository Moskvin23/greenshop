import React, { useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';

const products = [
  { name: 'Product 1', price: 20 },
  { name: 'Product 2', price: 50 },
  { name: 'Product 3', price: 100 },
  { name: 'Product 4', price: 200 },
  { name: 'Product 5', price: 500 },
  { name: 'Product 6', price: 1000 },
];

const FilterableProductList = () => {
  const [priceRange, setPriceRange] = useState({ min: 20, max: 1000 });

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange.min && product.price <= priceRange.max,
  );

  return (
    <div>
      <MultiRangeSlider min={20} max={1000} onChange={handlePriceRangeChange} />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableProductList;
