import React, { useEffect, useState, useRef } from 'react';
import CategoryButton from './CategoryButton';
import { GET_VIDEO_CATEGORIES_LIST } from '../utils/config';

const CategoriesButtonContainer = () => {
  const [categoryList, setCategoryList] = useState([]);
  const containerRef = useRef(null);

  const getCategories = async () => {
    try {
      const response = await fetch(GET_VIDEO_CATEGORIES_LIST);
      const data = await response.json();

      console.log(data.items);
      setCategoryList(data.items);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // You can still manually provide default categories if the API call fails or takes time
  const defaultCategoryList = ['All', 'Gadget', 'Gaming', 'Live', 'News'];

  const scrollCategories = (direction) => {
    const scrollAmount = 200; // Adjust as needed
    const container = containerRef.current;

    if (container) {
      if (direction === 'next') {
        container.scrollLeft += scrollAmount;
      } else if (direction === 'prev') {
        container.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <div className="relative w-[1104px] overflow-hidden">
      <button
        className="absolute top-0 bottom-0 left-0 ml-2 bg-transparent p-2"
        onClick={() => scrollCategories('prev')}
      >
        {'<'}
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 mr-2 bg-transparent p-2"
        onClick={() => scrollCategories('next')}
      >
        {'>'}
      </button>
      <div
        className="flex items-center"
        ref={containerRef}
        style={{ overflowX: 'hidden', scrollBehavior: 'smooth', marginLeft: '20px', marginRight: '20px' }}
      >
        {categoryList.length > 0
          ? categoryList.map((item) => (
              <CategoryButton name={item.snippet.title} key={item.id} />
            ))
          : defaultCategoryList.map((name) => (
              <CategoryButton name={name} key={name} />
            ))}
      </div>
    </div>
  );
};

export default CategoriesButtonContainer;

