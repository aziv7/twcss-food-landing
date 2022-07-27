import React, { useState } from 'react';
import { data } from '../db/data';

const Food = () => {
  const [filtred, setFiltred] = useState([...data]);
  return (
    <section className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated
      </h1>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap max-w-[500px] w-full'>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              All
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              Burgers
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              Pizza
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              Salads
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              Chicken
            </button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full flex-wrap'>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$$
            </button>
            <button className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div>
        {filtred.map((p) => (
          <p>{p.name}</p>
        ))}
      </div>
    </section>
  );
};

export default Food;
