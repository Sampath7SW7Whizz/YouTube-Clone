import React from 'react';

const CategoryButton = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-100 rounded-lg items-center overflow-hidden whitespace-nowrap">
        <span >
          {name}
        </span>
      </button>
    </div>
  );
};

export default CategoryButton;
