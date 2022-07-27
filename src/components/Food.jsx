import React, { useState } from 'react';
import { data } from '../db/data';

const Food = () => {
  const changeCategoryFilter = (filter) => {
    if (filter === 'all') {
      setCategoryFilters({
        all: true,
        burger: false,
        pizza: false,
        chicken: false,
        salad: false,
      });
      setFiltred([...data]);
      return [...data];
    } else {
      switch (filter) {
        case 'burger':
          {
            let filtred = data.filter(
              (item) =>
                (item.category === filter && !categoryFilters.burger == true) ||
                categoryFilters[item.category] === true
            );
            setFiltred([...filtred]);

            setCategoryFilters({
              ...categoryFilters,
              all: false,
              burger: !categoryFilters.burger,
            });

            return filtred;
          }

          break;
        case 'salad':
          {
            setFiltred(
              data.filter(
                (item) =>
                  (item.category === filter &&
                    !categoryFilters.salad == true) ||
                  (categoryFilters[item.category] === true &&
                    item.category !== filter)
              )
            );
            setCategoryFilters({
              ...categoryFilters,
              all: false,
              salad: !categoryFilters.salad,
            });
          }

          break;
        case 'pizza':
          {
            setFiltred(
              data.filter(
                (item) =>
                  (item.category === filter &&
                    !categoryFilters.pizza == true) ||
                  (categoryFilters[item.category] === true &&
                    item.category !== filter)
              )
            );
            setCategoryFilters({
              ...categoryFilters,
              all: false,
              pizza: !categoryFilters.pizza,
            });
          }

          break;
        case 'chicken':
          {
            setFiltred(
              data.filter(
                (item) =>
                  (item.category === filter &&
                    !categoryFilters.chicken == true) ||
                  (categoryFilters[item.category] === true &&
                    item.category !== filter)
              )
            );
            setCategoryFilters({
              ...categoryFilters,
              all: false,
              chicken: !categoryFilters.chicken,
            });
          }

          break;

        default:
          break;
      }
    }
  };

  const filterPrice = (filter) => {
    if (categoryFilters.all == true)
      setFiltred(
        data.filter(
          (item) => item.price == filter && !priceFilters[filter] == true
        )
      );
    else
      setFiltred(
        data.filter(
          (item) =>
            (categoryFilters[item.category] == true &&
              item.price == filter &&
              !priceFilters[filter] == true) ||
            (item.price !== filter && priceFilters[item.price] == true)
        )
      );
  };

  const [categoryFilters, setCategoryFilters] = useState({
    all: true,
    burger: false,
    pizza: false,
    chicken: false,
    salad: false,
  });

  const [priceFilters, setPriceFilters] = useState({
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  });

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
            <button
              onClick={() => changeCategoryFilter('all')}
              className={` ${
                categoryFilters.all === true
                  ? 'text-white bg-orange-600'
                  : 'text-orange-600 border-orange-600'
              } transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2`}>
              All
            </button>
            <button
              onClick={() => changeCategoryFilter('burger')}
              className={` ${
                categoryFilters.burger === true
                  ? 'text-white bg-orange-600'
                  : 'text-orange-600 border-orange-600'
              } transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2`}>
              Burgers
            </button>
            <button
              onClick={() => changeCategoryFilter('pizza')}
              className={` ${
                categoryFilters.pizza === true
                  ? 'text-white bg-orange-600'
                  : 'text-orange-600 border-orange-600'
              } transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2`}>
              Pizza
            </button>
            <button
              onClick={() => changeCategoryFilter('salad')}
              className={` ${
                categoryFilters.salad === true
                  ? 'text-white bg-orange-600'
                  : 'text-orange-600 border-orange-600'
              } transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2`}>
              Salads
            </button>
            <button
              onClick={() => changeCategoryFilter('chicken')}
              className={` ${
                categoryFilters.chicken === true
                  ? 'text-white bg-orange-600'
                  : 'text-orange-600 border-orange-600'
              } transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2`}>
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full flex-wrap'>
            <button
              onClick={() => {
                filterPrice('$');
              }}
              className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $
            </button>
            <button
              onClick={() => {
                filterPrice('$$');
              }}
              className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$
            </button>
            <button
              onClick={() => {
                filterPrice('$$$');
              }}
              className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice('$$$$');
              }}
              className='text-orange-600 border-orange-600 transition-all ease-in-out hover:text-white hover:bg-orange-600 m-2'>
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className=' rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {filtred.map((p, i) => (
          <div
            className='group border shadow-lg hover:scale-105 transition-all duration-200'
            key={p.id}>
            <img
              className='w-full h-[200px]  object-cover rounded-t-lg'
              src={p?.image}
              alt={p?.name}
            />

            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{p?.name} </p>
              <p>
                <span className='bg-orange-500 text-white px-2 py-0.5 rounded-full text-center'>
                  {p?.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
