import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Filter } from '../components/Filter';
import { CategoryList } from '../components/CategoryList';

export function HomePage() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data.categories);
      setFilteredCategories(data.categories);
    });
  }, []);

  const filterFunc = (text, searchBy) => {
    const newFilteredCategories = categories.filter(category => {
      return category[searchBy].toLowerCase().includes(text.toLowerCase());
    });

    setFilteredCategories(newFilteredCategories);
  }

  return (
    <div className='container mx-auto'>
      <div className='p-9'></div>
      <Filter filterFunc={filterFunc} />
      <CategoryList categories={filteredCategories} />
    </div>
  )
}
