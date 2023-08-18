import React from 'react'
import { useState } from 'react'
import Navigation from '../Navigation/Nav'
import Products from '../Products/Product'
import './Best.css'
import Recommended from '../Reccomended/Recomended'
import Sidebar from '../Sidebar/Sidebar'
import products from '../db/data'
import Card from '../Components/items/Card'
export default function Best() {
  const [selectedCategory, setSelectedCategory] = useState(null);
 

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({id, img, title, star, reviews, prevPrice, newPrice }) => (
      
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
         
        />
        
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
   
    <div className='one-s'> <Sidebar handleChange={handleChange}  /></div>
    <div className='two-s'> <Navigation query={query} handleInputChange={handleInputChange} /></div>
    <div className='three-s'><Recommended handleClick={handleClick} /></div>
    <div className='four-s'><Products result={result} /></div>
    </div>
  )
}
