import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaAmazon ,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300 text-center'>
      <div>
        <h1 className='w-full text-3xl font-bold text-indigo-600'>E-MPHATY.</h1>
        <p className='py-4'>We believe in your success 🎉🎉🫡🫡🎉🎉</p>
        <div className='flex justify-around   md:w-[100%] my-5 place-content-center columns-3' >
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
            <FaAmazon size={30}/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      </div>
    </div>
  );
};

export default Footer;