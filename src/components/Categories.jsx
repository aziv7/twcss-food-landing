import React from 'react';
import { categories } from '../db/data';

const Categories = () => {
  return (
    <section className='m-auto max-w-[1640px] px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Categories
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item) => (
          <div
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
            key={item.id}>
            <h2 className='font-bold sm:text-xl'>{item?.name} </h2>
            <img className='w-20 ' src={item?.image} alt={item?.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
