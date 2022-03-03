import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="min-w-[260px] flex flex-col justify-center items-center p-4 rounded-lg bg-white hover:shadow-2xl cursor-pointer space-y-4 border-2 border-info">
      <div>{category?.icon}</div>
      <div>{category?.name}</div>
    </div>
  );
};

export default CategoryCard;
