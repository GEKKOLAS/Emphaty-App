import React from 'react';
import splasheado from '../assets/splasheado.png';

const Analytics = () => {
  return (
    <div className='w-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={splasheado} alt='/' />
        

        <div className='flex flex-col justify-center'>
          <h1 className='text-indigo-600 md:text-6xl sm:text-3xl text-center text-2xl font-bold py-2'>What is E-mpathy?</h1>
          <p className='text-white md:text-3xl text-center  text-xl font-bold'>
            An AR training platform Empowered by VR/AR technologys to provide an immersive learning environment for call center representatives.

          </p>
          <button className='bg-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>
      </div>
    </div>
    
  );
};

export default Analytics;