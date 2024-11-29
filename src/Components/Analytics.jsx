import React from 'react';
import splasheado from '../assets/splasheado.png';

const Analytics = () => {
  return (
    <div className='w-full bg-gradient-to-r from-indigo-950 to-slate-900'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='justify-items-center w-[500px] mx-auto my-4' src={splasheado} alt='/' />
        

        <div className='flex flex-col justify-center'>
          <h1 className='text-indigo-600 md:text-6xl sm:text-3xl text-center text-2xl font-bold py-2'>What is Enterprise Company?</h1>
          <p className='text-white md:text-3xl text-center  text-xl font-bold'>
          Unlock the full potential of your business with our cutting-edge software solutions! By automating repetitive tasks, we boost your efficiency and productivity, allowing your team to focus on strategic growth. Transform your business today with our innovative software solutions!

          </p>
          <button className='bg-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>
      </div>
    </div>
    
  );
};

export default Analytics;