import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <div className='text-white ' >
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto md:text-2xl text-xl font-bold text-center flex flex-col justify-center'>
                <p className='text-indigo-600 font-bold p-2'>
                    Powerfull AR learning Tool

                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Improve  your Soft Skills By The Power Of VR/AR

                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Fast, flexible financing for 
                    </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl text-indigo-600 font-bold md:pl-4 pl-2'
                        strings={['BTB', 'BTC', 'SaaS', 'CcaS' ]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Shorter and better interactions - 15% Improvement for overall C-SAT Metrics - 15% AHT Improvement.</p>
                
            </div>
        </div>
    );
};

export default Hero;