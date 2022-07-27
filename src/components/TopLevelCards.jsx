import React from 'react';

const TopLevelCards = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full rounded-xl text-white bg-black/50'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOFO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>{' '}
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />{' '}
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full rounded-xl text-white bg-black/50'>
          <p className='font-bold text-2xl px-2 pt-4'>Last Sandwich</p>
          <p className='px-2'>Always picked</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>{' '}
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />{' '}
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full rounded-xl text-white bg-black/50'>
          <p className='font-bold text-2xl px-2 pt-4'>3rd Boss Burger</p>
          <p className='px-2'>Always picked</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>{' '}
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2874989/pexels-photo-2874989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />{' '}
      </div>
    </section>
  );
};

export default TopLevelCards;
