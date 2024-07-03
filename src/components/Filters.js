import React, { useEffect, useState } from 'react';

const Filters = ({ categories, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const filters = {
      searchTerm,
      categoryFilter,
      priceFilter: parseFloat(priceFilter)
    };
    onFilterChange(filters);
  }, [searchTerm, categoryFilter, priceFilter, onFilterChange]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory);
  };

  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <select
          className="form-select"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <input
          type="number"
          className="form-control"
          placeholder="Max Price"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
