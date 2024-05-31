import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, text, imageSrc, alt }) => {
  return (
    <Link to={to} className='w-full'>
      <button className="text-purple-300 font-bold h-full w-full flex flex-col items-center" >
        <span className="my-auto bg-purple-300 hover:bg-purple-800 text-purple-800 hover:text-purple-300 rounded-lg text-3xl md:text-5xl px-6 py-4 mt-4 mb-4 w-3/4 hover:w-4/5">
          <img src={imageSrc} alt={alt} className="inline h-12 md:h-16 mr-3" />
          {text}
        </span>
      </button>
    </Link>
  );
};

export default Button;
